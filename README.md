# Asymmetric page transitions

![demo](media/demo.gif?raw=true "demo")

First, define some animations:

```js
const InitialOffset = 64;

export const variants = {
  enterFromRight: {
    enter: { translateX: InitialOffset, opacity: 0 },
    visible: { translateX: 0, opacity: 1 },
  },
  enterFromLeft: {
    enter: { translateX: -InitialOffset, opacity: 0 },
    visible: { translateX: 0, opacity: 1 },
  },
  enterFromTop: {
    enter: { translateY: -InitialOffset, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  },
};
```

then at the root of your application, add a listener to react-router-dom's history object:

```jsx
const App = () => {
  // Create our list of recent paths based on our initial location
  const history = useHistory();
  const location = useLocation();
  const [recentPaths, setRecentPaths] = useState([location.pathname]);

  // Assign a listener to react-router-dom's 'history' object so that we can track recently visited pages
  useEffect(() => {
    history.listen((route) => setRecentPaths((recentPaths) => [route.pathname, ...recentPaths].slice(0, MaxHistory)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <main>{/* Children here */}</main>;
};
```

finally, at a page level, consume the recent paths via a context and choose your page transition based on the previous page:

```jsx
const Page = () => {
  const recentHistory = useContext(RecentHistoryContext);
  const previousRoute = recentHistory[1];

  let variant = variants.enterFromTop;
  if (previousRoute === "/page-1") variant = variants.enterFromRight;
  if (previousRoute === "/page-3") variant = variants.enterFromLeft;

  return (
    <motion.div variants={variant} initial="enter" animate="visible">
      {/* Page content here */}
    </motion.div>
  );
};
```
