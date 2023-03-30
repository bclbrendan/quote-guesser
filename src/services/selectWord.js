import React from 'react';
import { useState, useEffect, setState } from 'react';
import { getSynonym } from './APIs/synonymFetch';
import { getRhyme } from './APIs/rhymeFetch';
import CallQuote from './callQuote';

// exporting function and adding default value so code doesn't return undefined when waiting for api
export function selectWord(quote = ""){
    let quoteToReplace = JSON.stringify(quote.quote.quote)
    // removing punctuation from quote so doesn't affect length of word, and splitting into array of individual words
    let replacedQuote = quoteToReplace.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
    let splitQuote = replacedQuote.split(" ")

    // choosing word to be blanked for game by taking the longest word from the splitQuote array

    let blankWord = splitQuote.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    )
    // send selected word to hint APIs

    return blankWord;
}




