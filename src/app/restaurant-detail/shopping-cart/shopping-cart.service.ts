import { CartItem } from "./model/cart-item.model";

export class ShoppingCartService{
    itens:CartItem[] =[];

    clear(){
        this.itens = [];
    }

    total():number{
        return this.itens.map(item => item.value()).reduce((prev,value)=> prev + value, 0);
    }
    addItem(item:any){
        let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id);
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1;
        }else{
            this.itens.push(new CartItem(item));
        }
    }

    removeItem(item:any){
        this.itens.splice(this.itens.indexOf(item),1);
    }
}