import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Onboarding/Vector.png"; // ✅ Adjust this path if file is in same folder

const BusinessForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    domain: "",
    productService: "",
    role: "",
    skuSize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Section */}
      <div className="relative lg:w-1/2 w-full bg-[#6941C6] text-white flex flex-col justify-center rounded-b-3xl lg:rounded-r-3xl lg:rounded-b-none px-8 sm:px-12 py-10">

        {/* ✅ Logo with layout styling */}
        <img
          src={Logo}
          alt="TheStockMind Logo"
          className="absolute top-[29px] left-[30px] w-[249px] h-[30px] opacity-100 rotate-0"
        />

        <div className="max-w-md mt-32 sm:mt-40 lg:mt-0 lg:absolute lg:left-12 lg:top- [22rem]">
          <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
            Engineered to handle all your inventory needs
          </h2>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Your complete inventory management software to track inventory,
            streamline sales, fulfill orders, and oversee warehouses from a
            single window.
          </p>
        </div>

        <p className="absolute bottom-4 left-6 text-xs text-white/60">
          © TheUnityWare 2024
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 px-4 sm:px-8 py-10">
        <div className="max-w-lg w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            Tell us a little about your business
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            {/* Business Name */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">
                BUSINESS NAME*
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Brew & Bliss"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">
                INDUSTRY*
              </label>
              <input
                type="text"
                name="industry"
                placeholder="FMCG"
                value={formData.industry}
                onChange={handleChange}
                required
                className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Domain */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">DOMAIN*</label>
              <input
                type="text"
                name="domain"
                placeholder="Coffee"
                value={formData.domain}
                onChange={handleChange}
                required
                className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Product/Service */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">
                PRODUCT/SERVICES OFFERED*
              </label>
              <input
                type="text"
                name="productService"
                placeholder="Premium"
                value={formData.productService}
                onChange={handleChange}
                required
                className="border border-gray-300 w-full rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Role */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                WHICH OF THE FOLLOWING BEST DESCRIBES YOU*
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 text-gray-700 text-sm">
                {["Super-stockiest", "Distributor", "Retailer", "Brand"].map(
                  (role) => (
                    <label key={role} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                        required
                      />
                      {role}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* SKU Section */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                STORAGE KEEPING UNIT (SKU) SIZE*
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 mt-2 text-gray-700 text-sm">
                {[
                  "<500 units",
                  "501–1000 units",
                  "1001–5000 units",
                  "5001–10000 units",
                  "10001–25000 units",
                  ">25000 units",
                ].map((sku) => (
                  <label key={sku} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="skuSize"
                      value={sku}
                      checked={formData.skuSize === sku}
                      onChange={handleChange}
                      required
                    />
                    {sku}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#6C3BFF] text-white w-48 sm:w-56 py-2 rounded-md hover:bg-[#5a2de0] transition"
              >
                Get Started →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
