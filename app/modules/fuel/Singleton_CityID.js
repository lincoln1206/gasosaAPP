export default class Singleton_CityID {

    static myInstance = null;

    _cityID = "";

    /**
     * @returns {Singleton_CityID}
     */
    static getInstance() {
        if (Singleton_CityID.myInstance == null) {
            Singleton_CityID.myInstance = new Singleton_CityID();
        }

        return this.myInstance;
    }

    getCityID() {
        return this._cityID;
    }

    setCityID(id) {
        this._cityID = id;
    }
}