import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

interface BusinessCategory {
  business_category_id: number;
  business_category_name: string;
}

interface ValidationErrors {
  lastName?: string;
  firstName?: string;
  lastNameKana?: string;
  firstNameKana?: string;
  phoneNumber?: string;
  email?: string;
  businessCategoryId?: string;
  messageReceiveEmailFlag?: string;
  inquiryResponseEmailFlag?: string;
  progressNotificationFlag?: string;
}

export function MemberSubscribe() {
  const [businessCategories, setBusinessCategories] = useState<BusinessCategory[]>([]);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    phoneNumber: "",
    email: "",
    businessCategoryId: "",
    messageReceiveEmailFlag: false,
    inquiryResponseEmailFlag: false,
    progressNotificationFlag: false,
  });

  useEffect(() => {
    fetchBusinessCategories();
  }, []);

  const fetchBusinessCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("m_business_category")
        .select("*");

      if (error) throw error;
      setBusinessCategories(data || []);
    } catch (error) {
      console.error("Error fetching business categories:", error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // 必須チェック
    if (!formData.lastName) newErrors.lastName = "姓を入力してください";
    if (!formData.firstName) newErrors.firstName = "名を入力してください";
    if (!formData.lastNameKana) newErrors.lastNameKana = "セイを入力してください";
    if (!formData.firstNameKana) newErrors.firstNameKana = "メイを入力してください";
    if (!formData.phoneNumber) newErrors.phoneNumber = "電話番号を入力してください";
    if (!formData.businessCategoryId) newErrors.businessCategoryId = "事業者区分を選択してください";
    
    // メールアドレスチェック
    if (!formData.email) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 入力時のエラーをクリア
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // バリデーションチェック
    if (!validateForm()) {
      return;
    }

    try {
      // 最新の営業員IDを取得
      const { data: latestId, error: fetchError } = await supabase
        .from("t_sales_person")
        .select("sales_person_id")
        .order("sales_person_id", { ascending: false })
        .limit(1);

      if (fetchError) throw fetchError;

      // 新しい営業員IDを生成（最初のレコードの場合は"0000000001"から開始）
      const nextId = latestId && latestId.length > 0
        ? String(Number(latestId[0].sales_person_id) + 1).padStart(10, '0')
        : "0000000001";

      // フォームデータをスネークケースに変換
      const submissionData = {
        sales_person_id: nextId,
        last_name: formData.lastName,
        first_name: formData.firstName,
        last_name_kana: formData.lastNameKana,
        first_name_kana: formData.firstNameKana,
        phone_number: formData.phoneNumber,
        email: formData.email,
        business_category_id: formData.businessCategoryId,
        message_receive_email_flag: formData.messageReceiveEmailFlag,
        inquiry_response_email_flag: formData.inquiryResponseEmailFlag,
        progress_notification_flag: formData.progressNotificationFlag,
        delete_flag: false,
        registered_date: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("t_sales_person")
        .insert([submissionData]);

      if (error) throw error;
      alert("登録が完了しました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="form-title text-center text-2xl font-bold mb-8">会員登録</h2>
      
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="user-info-section bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="text-lg font-medium">ユーザー情報入力</h3>
        </div>
        
        <div className="form-section space-y-6">
          <div className="form-group">
            <label className="form-label">
              氏名
              <span className="form-required">必須</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className={`form-input w-full ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="姓"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
                {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
              </div>
              <div>
                <input
                  type="text"
                  className={`form-input w-full ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="名"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                />
                {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              フリガナ
              <span className="form-required">必須</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className={`form-input w-full ${errors.lastNameKana ? 'border-red-500' : ''}`}
                  placeholder="セイ"
                  value={formData.lastNameKana}
                  onChange={(e) => handleInputChange("lastNameKana", e.target.value)}
                />
                {errors.lastNameKana && <div className="text-red-500 text-sm mt-1">{errors.lastNameKana}</div>}
              </div>
              <div>
                <input
                  type="text"
                  className={`form-input w-full ${errors.firstNameKana ? 'border-red-500' : ''}`}
                  placeholder="メイ"
                  value={formData.firstNameKana}
                  onChange={(e) => handleInputChange("firstNameKana", e.target.value)}
                />
                {errors.firstNameKana && <div className="text-red-500 text-sm mt-1">{errors.firstNameKana}</div>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              電話番号
              <span className="form-required">必須</span>
            </label>
            <div>
              <input
                type="tel"
                className={`form-input w-full ${errors.phoneNumber ? 'border-red-500' : ''}`}
                placeholder="例）000-0000-0000"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              />
              {errors.phoneNumber && <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>}
              <div className="form-hint">※ハイフン(-)を付けて入力してください</div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              メールアドレス
              <span className="form-required">必須</span>
            </label>
            <div>
              <input
                type="email"
                className={`form-input w-full ${errors.email ? 'border-red-500' : ''}`}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              事業者区分
              <span className="form-required">必須</span>
            </label>
            <div>
              <select
                className={`form-select w-full ${errors.businessCategoryId ? 'border-red-500' : ''}`}
                value={formData.businessCategoryId}
                onChange={(e) => handleInputChange("businessCategoryId", e.target.value)}
              >
                <option value="">選択してください</option>
                {businessCategories.map((category) => (
                  <option
                    key={category.business_category_id}
                    value={category.business_category_id.toString()}
                  >
                    {category.business_category_name}
                  </option>
                ))}
              </select>
              {errors.businessCategoryId && <div className="text-red-500 text-sm mt-1">{errors.businessCategoryId}</div>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              メッセージ受信メール
              <span className="form-required">必須</span>
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="messageReceiveEmail"
                  value="true"
                  checked={formData.messageReceiveEmailFlag === true}
                  onChange={(e) => handleInputChange("messageReceiveEmailFlag", e.target.value === "true")}
                />
                受信する
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="messageReceiveEmail"
                  value="false"
                  checked={formData.messageReceiveEmailFlag === false}
                  onChange={(e) => handleInputChange("messageReceiveEmailFlag", e.target.value === "true")}
                />
                受信しない
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              問い合わせ返信メール
              <span className="form-required">必須</span>
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="inquiryResponseEmail"
                  value="true"
                  checked={formData.inquiryResponseEmailFlag === true}
                  onChange={(e) => handleInputChange("inquiryResponseEmailFlag", e.target.value === "true")}
                />
                受信する
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="inquiryResponseEmail"
                  value="false"
                  checked={formData.inquiryResponseEmailFlag === false}
                  onChange={(e) => handleInputChange("inquiryResponseEmailFlag", e.target.value === "true")}
                />
                受信しない
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              進捗通知メール
              <span className="form-required">必須</span>
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="progressNotification"
                  value="true"
                  checked={formData.progressNotificationFlag === true}
                  onChange={(e) => handleInputChange("progressNotificationFlag", e.target.value === "true")}
                />
                受信する
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="progressNotification"
                  value="false"
                  checked={formData.progressNotificationFlag === false}
                  onChange={(e) => handleInputChange("progressNotificationFlag", e.target.value === "true")}
                />
                受信しない
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
            >
              登録する
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 