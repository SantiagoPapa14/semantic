export const ContactForm = ({ t }: { t: (key: string) => string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    data["name"] = `${data["firstName"]} ${data["lastName"]}`;
    delete data["firstName"];
    delete data["lastName"];

    try {
      const response = await fetch("http://forms.semantic.com.ar/semantic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      console.log("Success:", await response.text());
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-left mb-2">{t("firstName")}</label>
          <input
            type="text"
            name="firstName"
            className="w-full px-4 py-3 border border-gray-200 rounded-md"
            placeholder={t("firstNamePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-left mb-2">{t("lastName")}</label>
          <input
            type="text"
            name="lastName"
            className="w-full px-4 py-3 border border-gray-200 rounded-md"
            placeholder={t("lastNamePlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-left mb-2">{t("email")}</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md"
            placeholder={t("emailPlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-left mb-2">{t("message")}</label>
          <textarea
            name="message"
            className="w-full px-4 py-3 border border-gray-200 rounded-md min-h-[150px]"
            placeholder={t("messagePlaceholder")}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:bg-black/80 transition-colors"
      >
        {t("sendMessage")}
      </button>
    </form>
  );
};
