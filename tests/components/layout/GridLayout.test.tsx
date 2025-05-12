import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GridLayout } from "@/components/layout/GridLayout";

describe('GridLayout', () => {
    it('should render Grid', async () => {
        const testId = "grid-testid";
        
        render(<GridLayout></GridLayout>)

        const result: HTMLElement = screen.getByTestId(testId);
        expect(result).toBeTruthy();
    })
})