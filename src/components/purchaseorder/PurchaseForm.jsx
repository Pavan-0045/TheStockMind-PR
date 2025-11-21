import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormLayout from "../common/FormLayout";
import {
  CharInput,
  NumberInput,
  DateInput,
  NumCharInput,
  EmailInput,
} from "../common/FormInputs";
import { FiPlus } from "react-icons/fi";

export default function PurchaseOrderForm({ onConfirm }) {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      products: [
        { productID: "", quantity: "", purchasePrice: "", totalPrice: "" },
      ],
      supplierID: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const submitForm = (data) => {
    console.log("Submitted:", data);
    if (onConfirm) onConfirm(data);
  };

  return (
    <FormLayout title="Create New Purchase Order" size="large">
      <form onSubmit={handleSubmit(submitForm)} className="px-2">

        {/* PRODUCT LIST */}
        <div className="space-y-6">
          {fields.map((item, index) => (
            <div key={item.id} className="relative">

              <div className="px-2 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">

                <NumCharInput
                  label="Product ID"
                  name={`products.${index}.productID`}
                  placeholder="Ex: TUX1234"
                  register={register}
                  rules={{ required: "Product ID is required" }}
                  error={errors.products?.[index]?.productID}
                />

                <NumberInput
                  label="Quantity"
                  name={`products.${index}.quantity`}
                  placeholder="Enter quantity"
                  register={register}
                  rules={{ required: "Quantity is required" }}
                  error={errors.products?.[index]?.quantity}
                />

                <NumberInput
                  label="Purchase Price / Unit"
                  name={`products.${index}.purchasePrice`}
                  placeholder="$120"
                  register={register}
                  rules={{ required: "Unit price is required" }}
                  error={errors.products?.[index]?.purchasePrice}
                />

                <NumberInput
                  label="Total Product Price"
                  name={`products.${index}.totalPrice`}
                  placeholder="Enter total price"
                  register={register}
                  rules={{ required: "Total price is required" }}
                  error={errors.products?.[index]?.totalPrice}
                />
              </div>

              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 text-red-500 text-xl"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ADD MORE */}
        <div className="px-8 py-2 flex justify-center">
          <button
            type="button"
            onClick={() =>
              append({
                productID: "",
                quantity: "",
                purchasePrice: "",
                totalPrice: "",
              })
            }
            className="flex items-center space-x-2 font-semibold cursor-pointer"
          >
            <div className="border-2 border-violet-800 text-violet-800 w-5 h-5 flex items-center justify-center rounded-full">
              <FiPlus className="text-sm" />
            </div>
            <span className="text-violet-800 text-sm">Add More Products</span>
          </button>
        </div>

        <hr className="my-4" />

        {/* SUPPLIER */}
        <div className="px-8 pb-2 grid sm:grid-cols-2 gap-6 items-center">

          <NumCharInput
            label="Supplier ID"
            name="supplierID"
            placeholder="Ex: TUW10234"
            register={register}
            rules={{ required: "Supplier ID is required" }}
            error={errors.supplierID}
          />

          <button
            type="submit"
            className="bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-800"
          >
            Place Purchase Order
          </button>

        </div>
      </form>
    </FormLayout>
  );
}
