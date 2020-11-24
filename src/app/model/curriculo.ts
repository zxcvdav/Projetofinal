export class Curriculo {
    id: string;
    nome :string;
    arquivo: string;
    email:string;
    telefone: string;
    
    setData(objFirebase: any){
        this.id = objFirebase.id;
        this.nome = objFirebase.nome;
        this.arquivo = objFirebase.arquivo;
        this.email = objFirebase.email;
        this.telefone = objFirebase.telefone;
    
    }
    
    }