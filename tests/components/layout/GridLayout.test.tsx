import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GridLayout } from "@/components/layout/GridLayout";
import "@testing-library/jest-dom";

describe('GridLayout', () => {
    it('should render Grid', async () => {
        const testId = "grid-testid";
        
        render(<GridLayout></GridLayout>)

        expect(screen.getByTestId(testId)).toBeVisible();
    })
})