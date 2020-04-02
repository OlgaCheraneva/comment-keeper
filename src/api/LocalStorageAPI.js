const ARTIFICIAL_ERROR_PROBABILITY = 0.3;

export default class LocalStorageAPI {
    getData() {
        return new Promise((resolve, reject) => {
            if (this.isArtificialError()) {
                reject('An artificial local storage error while getting data');
            }

            try {
                const serializedComments = localStorage.getItem('comments');
                if (serializedComments === null) {
                    resolve([]);
                }
                resolve(JSON.parse(serializedComments));
            } catch (err) {
                console.error(err);
                reject(err.message);
            }
        });
    }

    setData(data) {
        return new Promise((resolve, reject) => {
            if (this.isArtificialError()) {
                reject('An artificial local storage error while setting data');
            }

            try {
                const serializedComments = JSON.stringify(data);
                localStorage.setItem('comments', serializedComments);
                resolve();
            } catch (err) {
                console.error(err);
                reject(err.message);
            }
        });
    }

    isArtificialError() {
        const randomNumber = Math.random();
        return randomNumber < ARTIFICIAL_ERROR_PROBABILITY;
    }
}
