require([
	'./config',
	'jquery',
	'fyre',
	'streamhub-backbone',
	'streamhub-isotope',
	'./src/js/WallRenderer'],
	
	function (Config, $, fyre, Hub, IsotopeView, WallRenderer) {
		// Load the SDK
		fyre.conv.load({
				network: Config.network
			},
			[{app: 'sdk'}],
			function (sdk) {
				loadMediaWall(sdk);
			}
		);
	
		/**
		 * Load the Feed of social Content
		 * @param sdk - Livefyre JavaScript SDK
		 */	
		function loadMediaWall (sdk) {
			// Create a Collection for Content to be in
			var collection = new Hub.Collection();
			
			// Create a View to visualize the Collection
			var isotopeView = new IsotopeView({
				el: document.getElementById("fyre-media-wall"),
				collection: collection,
				contentViewOptions: {
					template: WallRenderer
				}
			});
	
			// Bind the View to a remote Collection
			collection.setRemote({
				sdk: sdk,
				siteId: Config.siteId,
				articleId: Config.mediaWall.articleId
			});
		}
});