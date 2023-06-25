import { Header, SearchPostsFormContainer } from "./styles";

export function SearchPostsForm(){
    return (
        <SearchPostsFormContainer /*onSubmit={}*/>
            <Header>
                <h4>Publicações</h4>
                <span>6 publicações</span>
            </Header>
            <input 
                type="text" 
                placeholder="Buscar Conteúdo" 
            />
        </SearchPostsFormContainer>
    )
}