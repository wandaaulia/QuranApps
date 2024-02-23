jest.mock("../services/dataSurah.service")

import { render, screen } from "@testing-library/react";
import Home from ".";
import getSurah from "../services/dataSurah.service"


describe("Home Component", () => {

    it("renders loading skeleton when data is loading", async() => {
        
        getSurah.mockReturnValue("ini");

        render(<Home />)

        expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
    })
})