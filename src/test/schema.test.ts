import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("public structured data", () => {
  it("does not list employer or organization affiliations", () => {
    const html = readFileSync("index.html", "utf8");
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    expect(blocks.length).toBeGreaterThan(0);
    const forbiddenFields = ["worksFor", "employer", "organization", "affiliation", "memberOf"];
    const inspect = (value: unknown) => {
      if (!value || typeof value !== "object") return;
      for (const [key, child] of Object.entries(value)) {
        expect(forbiddenFields).not.toContain(key);
        if (key === "@type") expect(child).not.toBe("Organization");
        inspect(child);
      }
    };
    for (const block of blocks) inspect(JSON.parse(block[1]));
  });
});