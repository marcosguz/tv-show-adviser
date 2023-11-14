<h1 align="center">TV Show Adviser App</h1>

```javascript
export function App() {
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        try {
            const popularTVShowList = await TVShowAPI.fetchPopulars();
            if (popularTVShowList.length > 0) {
                setCurrentTVShow(popularTVShowList[0]);
            }
        } catch (error) {
            alert("Something went wrong wwhen fetching the popular tv shows");
        }
    }

    async function fetchRecommendations(tvShowId) {
        try {
            const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
            if (recommendationListResp.length > 0) {
                setRecommendationList(recommendationListResp.slice(0, 10));
            }
        } catch (error) {
            alert("...");
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }

    async function fetchSearchTVShow(title) {
        try {
            const searchResponse = await TVShowAPI.fetchSearchTVShow(title);
            if (searchResponse.length > 0) {
                setCurrentTVShow(searchResponse[0]);
            }
        } catch (error) {
            alert("...");
        }
    }

    return (
        <div
            className={s.main_container}
            style={{
                background: currentTVShow
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black",
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo
                            title="Watowatch"
                            subtitle="Find a show you may like"
                            image={logoImg}
                        />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSubmit={fetchSearchTVShow} />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_details}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className={s.recommended_shows}>
                {currentTVShow && <TVShowList onClickItem={updateCurrentTVShow} tvShowList={recommendationList} />}
            </div>
        </div>
    );
}
```
## Architecture
This application will be contained in an application component or root component.

<table width="100%">
    <tbody width="100%">
        <tr>
            <td rowspan=5 align="rigth">
                <img src="https://github.com/marcosguz/tv-show-adviser/assets/75583218/3f48f3ec-7e93-48e4-8d8a-a2ca0af01ea3" width="100%">
            </td>
        </tr>
        <tr>
            <td align="justify">Create a component for the entire tv sow adviser, search, tv show list, etc. It's going to contain everything all the sub components..</td>
        </tr>
        <tr>
            <td align="justify">You probably have to create a component for the search, because it is completely static</td>
        </tr>
        <tr>
            <td align="justify">Another component would probably be created for the form.
				Here we have the input to submit the form.</td>
        </tr>
        <tr>
            <td align="justify">And finally, a component needs to be created, this section only contains the TV shows list element but also the logic to render the top 10.</td>
        </tr>
    </tbody>
</table>

## About the project

<table width="100%">
    <tbody width="100%">
        <tr>
            <td rowspan=5 align="rigth">
                <img src="https://github.com/marcosguz/tv-show-adviser/assets/75583218/cff6a44b-739e-42a3-a199-7ba8bdddbe0f" width="500px">
            </td>
        </tr>
        <tr>
            <td align="justify">This web application is developed for educational purposes for API consumption. It is quite simple to use: you just have to choose the movie or TV series that appears at the beginning, or you can also search for the movie or TV series, for greater convenience.</td>
        </tr>
        <tr>
            <td align="justify">
				<a href="https://tv-show-adviser-weld.vercel.app/">TV Show</a>
			</td>
        </tr>
    </tbody>
</table>

## Developed with
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## How to contribute?
Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contribution you make is greatly appreciated.

1. Fork the project.
2. Create a feature branch: (git checkout -b features/amazing-feature).
3. Commit your changes: (git commit -m 'Add an Amazing Feature').
4. Upload your changes to the branch: (features/amazing-feature)
5. Open a pull request

## License
Distributed under the MIT license. See the `LICENSE` file for more information.

## Contact
Marcos Guzmán

<a href="https://www.linkedin.com/in/marcos-guzman-nazareno" target="blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Marcos"/>
</a>
<a href="https://twitter.com/marccosgz" target="blank">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>

## Recognitions
- [Create React App](https://github.com/facebook/create-react-app)
- [TV_Show](https://developer.themoviedb.org/reference/intro/getting-started)
- [Marked](https://marked.js.org/)
