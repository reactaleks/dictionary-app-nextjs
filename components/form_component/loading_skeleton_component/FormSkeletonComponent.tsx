export default function FormSkeleton() {
    return (
        <div className="mx-auto animate-pulse">
  <div className="flex justify-between my-4 md:my-8 items-center">
    <div className="flex flex-col">
      <div className="h-10 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-2/3 mb-4"></div>
      <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/2"></div>
    </div>
  </div>
  <div className="flex justify-between  my-4 md:my-8">
    <div className="w-[10%] h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25"></div>
    <div className="w-[80%] flex items-center">
      <div className="w-full h-[1px] bg-gray-300"></div>
    </div>
  </div>
  <div className="my-4 md:my-8">
    <div className="h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/2 mb-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="flex justify-between my-4 md:my-8 w-[80%] md:w-[50%] items-center">
      <div className="h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/2"></div>
      <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/3"></div>
    </div>
  </div>
  <div className="my-4 md:my-8">
    <div className="h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-full md:w-1/2"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
    <div className="h-6 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 my-4"></div>
  </div>
  <div className="mb-16">
    <div className="h-1 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-full"></div>
    <div className="flex flex-col md:flex-row md:items-end md:justify-between md:w-[60%]">
      <div className="h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/3 mt-4"></div>
      <div className="h-4 bg-main_lightgray dark:bg-main_purple dark:bg-opacity-25 w-1/3 md:w-2/3"></div>
    </div>
  </div>
</div>
    )

}