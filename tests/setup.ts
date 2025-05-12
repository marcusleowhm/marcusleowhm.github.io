import { afterEach } from "vitest";
import { cleanup } from '@testing-library/react'
import "@/assets/styles/main.scss";

afterEach(() => {
    cleanup();
});