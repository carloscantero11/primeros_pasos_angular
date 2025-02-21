export class Zapatilla {
  // Asignación manual de propiedades
  /*
  public nombre: string;
  public marca: string;
  public color: string;
  public precio: number;
  public stock: boolean;

  constructor (nombre: string, marca: string, color: string, precio: number, stock: boolean) { 
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }
    */


  //  Segunda forma: Propiedades directamente en el constructor (Parameter Properties)
  constructor (
    public nombre: string,
    public marca: string,
    public color: string,
    public precio: number,
    public stock: boolean,
  ){}
}