import { useNavigate } from "react-router-dom";
import listNews from "../services/listNews";
import { newsStore } from "../store/newsStore";
import pages from "../constants/pages";

const useListNews = () => {
  const { list, loading, setList, setLoading } = newsStore();
  const navigate = useNavigate();

  async function getList() {
    setLoading(true);
    await listNews("us")
      .then((res) => {
        console.log(res);
        setList(
          res?.data.articles.filter(
            (item: { content: string | null; urlToImage: string | null }) =>
              item.content !== null && item.urlToImage
          )
        );
      })
      .finally(() => setLoading(false));
  }

  function gotoDetailPage(id: string) {
    navigate(pages.newsDetail + id);
  }

  function gotoNewsPage() {
    navigate(pages.news);
  }

  return { list, loading, getList, gotoDetailPage, gotoNewsPage };
};

export default useListNews;
