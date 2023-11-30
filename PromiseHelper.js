
export class PromiseHelper {
    rejects = [];

    wrap(p) {
        return Promise.race([new Promise((resolve, reject) => {
            this.rejects.push(reject);
        }), p]);
    }

    abort() {
        this.rejects.forEach(reject => reject("模型取消成功"));
        this.rejects.length = 0;
    }
}