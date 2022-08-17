import sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId: "bpe0u3n3",
    dataset: 'production',
    apiVersion: "2022-08-11",
    useCdn:true,
    token:
    "skJkiFuO2Gj9aJ3GWhNYKWr3UhSS79xiA8ykJPtu8L68hBADaEVexxTJk0DeVkdhCqJWcLIlwoGPJWbDxtd2taj2jN6rbvS1T8ptsFGq3cLE2BSIEZeg078XtV7cK27DgI2KZopD1hfwF9uLvpvk0zwVkaSMgEMMh8AAX3VAxgLZG5rf4bd8"
    
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
