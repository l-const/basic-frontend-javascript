import { render, screen, fireEvent } from "@testing-library/react"
import Async from "./Async"

describe("Async component", () => {
    test("renders ports if request succeeds", async () => {

        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{id: 1, title: "title first post"}]
            }
        })
        //setup
        render(<Async />)

        // no action required

        // assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})