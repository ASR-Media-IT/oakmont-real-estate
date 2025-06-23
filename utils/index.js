export function formatDate(inputDate) {
    const date = new Date(inputDate);

    // Get individual date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as mm/dd/yyyy
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
}

// Convert number to currency
// Example: 1000000 => $1,000,000.00
export function formatCurrency(amount, decimalPlaces) {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    });
}

// Convert number to percentage
// Example: 0.1 => 10%
export function formatPercentage(amount, decimalPlaces) {
    return amount.toLocaleString("en-US", {
        style: "percent",
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    });
}

// Prismic Locales

export async function getLocales(
  doc,
  client
) {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: '*',
            // Exclude all fields to speed up the query.
            fetch: `${doc.type}.__nonexistent-field__`,
          }
        )
      : Promise.resolve([]),
  ]);

  return [doc, ...altDocs].map((page) => {
    const lang = repository?.languages.find((l) => l.id === page.lang);

    return {
      lang: lang?.id || '',
      url: page?.url || '',
      lang_name: lang?.name || '',
    };
  });
}