import React from "react";
import { render, screen, within } from "@testing-library/react"

import CardList from "./CardList";
describe("Test CardList", () => {

    const dataDummy = [{
        arti: "ini arti",
        audio: "ini",
        deskripsi: "ini",
        jumlah_ayat: 2,
        nama:"ini",
        nama_latin: "ini",
        nomor: 1,
        tempat_turun: "ini2"
    }

]


    it("should have value", () => {

        render(<CardList resData={dataDummy}/>)

        const cardSurah = screen.getAllByTestId('card-surah');

        cardSurah.forEach((card, index) => {
            const namaLatin = within(card).getByTestId("nama-card-surah");
            const tempatTurun = within(card).getByTestId("nama-tempat-surah");
            const jumlahAyat = within(card).getByTestId("jumlah-ayat-surah");
      
            expect(namaLatin).toHaveTextContent(dataDummy[index].nama_latin);
            expect(tempatTurun).toHaveTextContent(dataDummy[index].tempat_turun);
            expect(jumlahAyat).toHaveTextContent(`${dataDummy[index].jumlah_ayat}`);
          });



    
    })

    
})