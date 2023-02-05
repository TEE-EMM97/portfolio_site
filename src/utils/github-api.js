exports.githubApiQuery = `
query($github_login: String!) {
	user(login: $github_login) {
		pinnedItems(first: 10, types: REPOSITORY, ){
			nodes {
				... on Repository {
			 id                       
			 name
			 url
			 description
			 homepageUrl
		 }
		}
	 }
	}
}
`;
