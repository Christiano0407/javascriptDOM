const musicAPI = async () => {
  try {
    const response = await fetch("https://api.spotify.com/v1/search/");

    if (response.status === 200) {
      const data = response.json();
      console.log(data);
    }
  } catch (error) {
    console.log("Erro!");
  }
};
/*  "BQAp9PXN737cPKlxCqNlZqqJWCg6T_hCtwflcHR0P6mFFG2iHeZEfBCbt6E-1M-3TaU4fUSEQMmBTuStH9ve0Q6OP7Go4-Ji4gL5wTTzyMMWu2TPayZm5FwjJOyi4HWeRxypHeFmH0xJ8obtfqbigZ7gREb48lQ"; */
musicAPI();
