import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import { App } from "@/App";

describe('App', () => {
    it('should render App component', () => {
        render(<App />)
    }) 
})