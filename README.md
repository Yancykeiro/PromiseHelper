# PromiseHelper
Help interrupt promise operations

## Example
 const promiseHelper = new PromiseHelper();
 promiseHelper.wrap(new Promise((resolve, reject) => {... })
 promiseHelper.abort();

 使用wrap包裹需要中断的promise，需要中断时调用abort。
