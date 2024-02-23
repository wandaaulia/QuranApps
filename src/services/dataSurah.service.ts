


import axios from "axios"

export default class dataSurah {
    static mockReturnValue: any

    static async getSurah() {
        return await axios.get(`/api/allSurah`)
    }
}