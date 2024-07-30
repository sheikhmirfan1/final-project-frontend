

const OrderForm = () => {
  return (
    <form className="flex flex-col justify-center mt-12 text-base font-medium text-center text-white whitespace-nowrap rounded max-md:mt-10 max-md:max-w-full">
      <div className="flex justify-center items-center px-16 py-8 border-t border-white max-md:px-5 max-md:max-w-full">
        <button
          type="submit"
          className="px-16 py-5 max-w-full bg-green-500 rounded border border-green-500 border-solid w-[180px] max-md:px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
