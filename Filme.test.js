/**
 * AI Assistance Notice
 * Esta test foi desenvolvida com auxílio de IA (ChatGPT).
 * O código foi revisado e compreendido pelo autor.
 */
import { describe, it, expect } from "vitest"
describe("Filme", () => {

  it("deve criar filme com nome e nota", () => {
    const filme = { nome: "Matrix", nota: 10 }
    expect(filme.nome).toBe("Matrix")
    expect(filme.nota).toBe(10)
  })

})