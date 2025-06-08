type CarType = {
    brand: string,
    releaseDate: number,
    model: string,
    id: string | number
}

type funcType = (brand: string, model: string, releaseDate: string, id: string | number) => CarType

