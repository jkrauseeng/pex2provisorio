/**
* Template Name: Bell
* Template URL: https://bootstrapmade.com/bell-free-bootstrap-4-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

"use strict";

/**
 * Função para buscar dados de uma API externa (Exemplo)
 * Substitua `API_URL` pelo endpoint real que deseja consumir.
 */
export async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao consumir API:", error);
  }
}

/**
 * Exemplo de função para enviar dados via POST
 * Substitua `API_URL` e ajuste os dados conforme necessário.
 */
export async function postData(endpoint, data) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Erro ao enviar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar dados para API:", error);
  }
}
