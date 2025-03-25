class ToyotaCar{
    start(){
        console.log("Car is starting");
    }
    stop(){
        console.log("Car is stopping");
    }
    setBrand(brand){
        this.brand = brand;
    }
}
fortuner = new ToyotaCar();
fortuner .setBrand("Toyota Fortuner");