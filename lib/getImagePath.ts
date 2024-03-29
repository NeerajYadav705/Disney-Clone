const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath 
    ? `https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://links.papareact.com/oBz";
}

export default getImagePath;