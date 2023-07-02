import { Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { DefaultLayout } from './layout/DefaultLayout';
import { Post } from './components/Post';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Blog/>}/>
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    );

}