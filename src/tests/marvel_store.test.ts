import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMarvelStore } from "../application/store/marvel_store";

describe("useMarvelStore", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useMarvelStore());
    expect(result.current.query).toBe("");
    expect(result.current.favorites).toEqual([]);
  });

  it("should update query when setQuery is called", () => {
    const { result } = renderHook(() => useMarvelStore());
    act(() => {
      result.current.setQuery("Spider-Man");
    });
    expect(result.current.query).toBe("Spider-Man");
  });

  it("should add a favorite when toggleFavorite is called with a new character", () => {
    const { result } = renderHook(() => useMarvelStore());
    act(() => {
      result.current.toggleFavorite(1, "Iron Man", "url-to-ironman");
    });
    expect(result.current.favorites).toEqual([
      { id: 1, name: "Iron Man", url: "url-to-ironman" },
    ]);
  });

  it("should remove a favorite when toggleFavorite is called with an existing character", () => {
    const { result } = renderHook(() => useMarvelStore());

    act(() => {
      result.current.toggleFavorite(1, "Iron Man", "url-to-ironman");
    });

    expect(result.current.favorites).toEqual([]);
  });
});
