import { describe, it, expect } from "vitest";
import { render, waitFor } from '@testing-library/react';
import { App } from "@/App";

describe('App', () => {
    it("should render App component with index page's title", async () => {        
        const expectedTitle = "- About me";
        
        render(<App />)
        
        await waitFor(() => expect(document.title).toBe(expectedTitle))
    })
})