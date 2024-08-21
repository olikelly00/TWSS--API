import quotes from '../data/quotes.json' assert {type: 'json'}

/* This function returns an array of all quotes */

export async function getAllQuotes() {
  return quotes
};