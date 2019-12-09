import React from 'react';

const Navigation = ({onRouteChange, signedIn}) => {
	if (signedIn === true) {
		return (
			<nav className="db dt-l w-100 border-box pa3 ph5-l">
				<svg className="dib w2 h2 br-100" viewBox="-30 0 512 512.1" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m302.347656 97.617188c-3.304687-12.773438-17.398437-30.875-70.808594-30.875-82.519531 0-94.265624 12.21875-116.226562-8.882813-18.53125-17.808594-29.410156 67.886719-4.707031 95.101563-10.425781 38.542968-2.085938 77.148437-2.085938 77.148437h232.164063s19.488281-90.179687-38.335938-132.492187zm0 0" fill="#339"/><path d="m131.960938 234.160156s-10.007813-18.332031-30.023438-18.332031c-20.019531 0-34.199219 88.007813 30.023438 73.335937zm0 0" fill="#ffe4d1"/><path d="m317.238281 234.160156s10.007813-18.332031 30.027344-18.332031c20.015625 0 34.195313 88.007813-30.027344 73.335937zm0 0" fill="#ffe4d1"/><path d="m224.601562 116.230469c-153.363281 0-124.039062 251.523437 0 251.523437 124.039063 0 153.363282-251.523437 0-251.523437zm0 0" fill="#ffefe4"/><path d="m224.601562 102.539062s-104.316406-14.714843-104.316406 119.128907c0 0 13.136719-55.320313 43.265625-70.40625 14.035157-7.027344 19.175781 10.773437 61.050781 10.773437 41.871094 0 47.011719-17.800781 61.046876-10.773437 30.132812 15.085937 43.265624 70.40625 43.265624 70.40625 0-133.84375-104.3125-119.128907-104.3125-119.128907zm0 0" fill="#339"/><path d="m284.210938 381.996094-.335938-38.054688c-15.757812 14.179688-35.363281 22.96875-58.292969 23.171875-22.929687.203125-42.6875-8.242187-58.691406-22.140625l.324219 36.722656c.085937 9.503907-5.992188 17.96875-15.023438 20.929688l-94.207031 30.898438c-28.214844 9.253906-47.289063 35.589843-47.289063 65.28125v13.296874h430.027344v-13.324218c0-29.679688-19.0625-56.003906-47.257812-65.269532l-94.242188-30.96875c-8.890625-2.917968-14.929687-11.183593-15.011718-20.542968zm0 0" fill="#ff8354"/><path d="m222.347656 485.003906c48.324219 0 89.542969-30.332031 105.710938-72.988281l-28.835938-9.476563c-8.894531-2.921874-14.929687-11.183593-15.011718-20.542968l-.335938-38.058594c-15.757812 14.183594-35.363281 22.972656-58.292969 23.175781-22.929687.199219-42.6875-8.242187-58.691406-22.144531l.324219 36.722656c.085937 9.507813-5.992188 17.96875-15.023438 20.933594l-34.765625 11.40625c16.691407 41.589844 57.363281 70.972656 104.921875 70.972656zm0 0" fill="#ffe4d1"/><g fill="#69ebfc"><path d="m109.988281 451.3125h-95.9375c-7.734375 0-13.9999998-6.265625-13.9999998-14v-99.371094c0-7.734375 6.2656248-14 13.9999998-14 7.730469 0 14 6.265625 14 14v85.375h81.9375c7.734375 0 14 6.269532 14 14 0 7.730469-6.265625 13.996094-14 13.996094zm0 0"/><path d="m14.050781 117.359375c-7.734375 0-13.9999998-6.265625-13.9999998-14v-89.359375c0-7.730469 6.2656248-14 13.9999998-14h95.9375c7.734375 0 14 6.269531 14 14s-6.265625 14-14 14h-81.9375v75.359375c0 7.734375-6.265625 14-14 14zm0 0"/><path d="m437.367188 451.3125h-95.941407c-7.730469 0-14-6.265625-14-14 0-7.730469 6.269531-14 14-14h81.941407v-85.371094c0-7.734375 6.265624-14 14-14 7.730468 0 14 6.265625 14 14v99.375c0 7.730469-6.269532 13.996094-14 13.996094zm0 0"/><path d="m437.367188 123.9375c-7.734376 0-14-6.265625-14-14v-81.9375h-81.941407c-7.730469 0-14-6.269531-14-14s6.269531-14 14-14h95.941407c7.730468 0 14 6.269531 14 14v95.9375c0 7.734375-6.269532 14-14 14zm0 0"/></g><path d="m14.050781 10h95.9375c5.96875 0 11.050781 3.738281 13.066407 9 .59375-1.554688.933593-3.234375.933593-5 0-7.730469-6.265625-14-14-14h-95.9375c-7.734375 0-13.9999998 6.269531-13.9999998 14v10c0-7.730469 6.2656248-14 13.9999998-14zm0 0" fill="#a1f1fc"/><path d="m437.367188 0h-95.941407c-7.730469 0-14 6.269531-14 14 0 1.765625.339844 3.445312.9375 5 2.011719-5.261719 7.09375-9 13.0625-9h95.941407c7.730468 0 14 6.269531 14 14v-10c0-7.730469-6.269532-14-14-14zm0 0" fill="#a1f1fc"/><path d="m336.246094 230.109375c0-6.125-4.273438-11.238281-10-12.546875l-9.550782-37.386719c3.976563-2.191406 6.671876-6.421875 6.671876-11.285156 0-7.113281-5.765626-12.878906-12.878907-12.878906-5.386719 0-9.996093 3.304687-11.917969 8l-63.261718-6.136719c-1.28125-5.761719-6.414063-10.074219-12.5625-10.074219-6.152344 0-11.289063 4.320313-12.566406 10.085938l-62.238282 6.039062c-1.945312-4.648437-6.53125-7.914062-11.886718-7.914062-7.113282 0-12.878907 5.765625-12.878907 12.878906 0 4.53125 2.34375 8.507813 5.882813 10.804687l-9.601563 37.574219c-6.726562.429688-12.050781 6.003907-12.050781 12.835938 0 7.070312 5.699219 12.804687 12.753906 12.875l9.964844 31.679687c-3.007812 2.359375-4.949219 6.015625-4.949219 10.132813 0 6.878906 5.390625 12.476562 12.175781 12.84375l6.761719 21.492187c-3.261719 2.335938-5.398437 6.152344-5.398437 10.46875 0 7.113282 5.765625 12.878906 12.882812 12.878906 3.484375 0 6.640625-1.386718 8.960938-3.636718l49.507812 26.074218c-.121094.714844-.199218 1.445313-.199218 2.195313 0 7.113281 5.765624 12.878906 12.878906 12.878906 7.113281 0 12.878906-5.765625 12.878906-12.878906 0-.726563-.074219-1.433594-.1875-2.128906l50.679688-26.695313c2.355468 2.570313 5.730468 4.191406 9.492187 4.191406 7.113281 0 12.878906-5.765624 12.878906-12.878906 0-4.875-2.710937-9.121094-6.707031-11.304687l6.488281-20.632813c.074219 0 .144531.011719.214844.011719 7.117187 0 12.882813-5.765625 12.882813-12.878906 0-4.453125-2.257813-8.375-5.691407-10.6875l9.851563-31.316407c6.082031-1.023437 10.71875-6.304687 10.71875-12.679687zm-36.9375 45.65625-62.28125-24.308594 75.304687-14.730469c1.238281 2.0625 3.039063 3.75 5.191407 4.847657l-9.550782 30.367187c-3.386718.132813-6.441406 1.5625-8.664062 3.824219zm11.238281-46.84375-76.5625 14.976563c-1.5625-2.796876-4.140625-4.949219-7.234375-5.960938l.046875-65.039062c3.472656-1.152344 6.289063-3.738282 7.742187-7.058594l63.457032 6.152344c1.261718 5.082031 5.527344 8.96875 10.8125 9.65625l9.375 36.671874c-4.1875 1.84375-7.203125 5.847657-7.636719 10.601563zm-91.761719 96.679687h-54.953125c-1.671875-5.109374-6.441406-8.808593-12.097656-8.871093l-6.648437-21.152344c3.363281-2.195313 5.621093-5.921875 5.816406-10.191406l62.179687-26.707031c1.507813 1.707031 3.449219 3.015624 5.664063 3.738281zm-85.722656-97.070312c-.476562-3.902344-2.695312-7.257812-5.859375-9.277344l9.589844-37.519531c5.742187-.328125 10.46875-4.40625 11.773437-9.832031l62.382813-6.050782c1.472656 3.355469 4.328125 5.957032 7.847656 7.089844l-.042969 64.992188c-3.105468 1.007812-5.683594 3.164062-7.25 5.960937zm-5.277344 12.035156c1.53125-1.101562 2.820313-2.527344 3.746094-4.183594l77.730469 15.226563-60.523438 25.996094c-2.3125-3.429688-6.234375-5.691407-10.6875-5.691407-.136719 0-.265625.019532-.402343.023438zm91.007813 93.035156.011719 21.25c-1.898438.609376-3.597657 1.644532-5 3l-46.035157-24.25zm12.9375 24.292969c-1.378907-1.34375-3.054688-2.375-4.925781-2.996093l-.011719-21.292969h51.058593zm62.117187-41.039062c-4.933594.675781-8.972656 4.132812-10.480468 8.746093h-56.578126l-.039062-63.191406c2.351562-.769531 4.40625-2.1875 5.945312-4.058594l63.058594 24.609376c-.089844.601562-.148437 1.210937-.148437 1.835937 0 4.183594 2.007812 7.894531 5.101562 10.246094zm0 0" fill="#69ebfc"/><path d="m440.695312 498.101562h-429.972656c-.003906.234376-.027344.46875-.027344.703126v13.296874h430.027344v-13.324218c0-.226563-.023437-.449219-.027344-.675782zm0 0" fill="#e0734a"/></svg>
				<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
					<a className="link dim white f6 f5-l dib mr3 mr4-l" href="https://www.clarifai.com/predict" title="Press">API Reference</a>
					<p className="link dim white f6 f5-l dib hand" title="Sign out" onClick={() => onRouteChange('signin')}>
						Sign Out
					</p>
				</div>
			</nav>
		)
	} else {
		return (
			<nav className="db dt-l w-100 border-box pa3 ph5-l">
				<svg className="dib w2 h2 br-100" viewBox="-30 0 512 512.1" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m302.347656 97.617188c-3.304687-12.773438-17.398437-30.875-70.808594-30.875-82.519531 0-94.265624 12.21875-116.226562-8.882813-18.53125-17.808594-29.410156 67.886719-4.707031 95.101563-10.425781 38.542968-2.085938 77.148437-2.085938 77.148437h232.164063s19.488281-90.179687-38.335938-132.492187zm0 0" fill="#339"/><path d="m131.960938 234.160156s-10.007813-18.332031-30.023438-18.332031c-20.019531 0-34.199219 88.007813 30.023438 73.335937zm0 0" fill="#ffe4d1"/><path d="m317.238281 234.160156s10.007813-18.332031 30.027344-18.332031c20.015625 0 34.195313 88.007813-30.027344 73.335937zm0 0" fill="#ffe4d1"/><path d="m224.601562 116.230469c-153.363281 0-124.039062 251.523437 0 251.523437 124.039063 0 153.363282-251.523437 0-251.523437zm0 0" fill="#ffefe4"/><path d="m224.601562 102.539062s-104.316406-14.714843-104.316406 119.128907c0 0 13.136719-55.320313 43.265625-70.40625 14.035157-7.027344 19.175781 10.773437 61.050781 10.773437 41.871094 0 47.011719-17.800781 61.046876-10.773437 30.132812 15.085937 43.265624 70.40625 43.265624 70.40625 0-133.84375-104.3125-119.128907-104.3125-119.128907zm0 0" fill="#339"/><path d="m284.210938 381.996094-.335938-38.054688c-15.757812 14.179688-35.363281 22.96875-58.292969 23.171875-22.929687.203125-42.6875-8.242187-58.691406-22.140625l.324219 36.722656c.085937 9.503907-5.992188 17.96875-15.023438 20.929688l-94.207031 30.898438c-28.214844 9.253906-47.289063 35.589843-47.289063 65.28125v13.296874h430.027344v-13.324218c0-29.679688-19.0625-56.003906-47.257812-65.269532l-94.242188-30.96875c-8.890625-2.917968-14.929687-11.183593-15.011718-20.542968zm0 0" fill="#ff8354"/><path d="m222.347656 485.003906c48.324219 0 89.542969-30.332031 105.710938-72.988281l-28.835938-9.476563c-8.894531-2.921874-14.929687-11.183593-15.011718-20.542968l-.335938-38.058594c-15.757812 14.183594-35.363281 22.972656-58.292969 23.175781-22.929687.199219-42.6875-8.242187-58.691406-22.144531l.324219 36.722656c.085937 9.507813-5.992188 17.96875-15.023438 20.933594l-34.765625 11.40625c16.691407 41.589844 57.363281 70.972656 104.921875 70.972656zm0 0" fill="#ffe4d1"/><g fill="#69ebfc"><path d="m109.988281 451.3125h-95.9375c-7.734375 0-13.9999998-6.265625-13.9999998-14v-99.371094c0-7.734375 6.2656248-14 13.9999998-14 7.730469 0 14 6.265625 14 14v85.375h81.9375c7.734375 0 14 6.269532 14 14 0 7.730469-6.265625 13.996094-14 13.996094zm0 0"/><path d="m14.050781 117.359375c-7.734375 0-13.9999998-6.265625-13.9999998-14v-89.359375c0-7.730469 6.2656248-14 13.9999998-14h95.9375c7.734375 0 14 6.269531 14 14s-6.265625 14-14 14h-81.9375v75.359375c0 7.734375-6.265625 14-14 14zm0 0"/><path d="m437.367188 451.3125h-95.941407c-7.730469 0-14-6.265625-14-14 0-7.730469 6.269531-14 14-14h81.941407v-85.371094c0-7.734375 6.265624-14 14-14 7.730468 0 14 6.265625 14 14v99.375c0 7.730469-6.269532 13.996094-14 13.996094zm0 0"/><path d="m437.367188 123.9375c-7.734376 0-14-6.265625-14-14v-81.9375h-81.941407c-7.730469 0-14-6.269531-14-14s6.269531-14 14-14h95.941407c7.730468 0 14 6.269531 14 14v95.9375c0 7.734375-6.269532 14-14 14zm0 0"/></g><path d="m14.050781 10h95.9375c5.96875 0 11.050781 3.738281 13.066407 9 .59375-1.554688.933593-3.234375.933593-5 0-7.730469-6.265625-14-14-14h-95.9375c-7.734375 0-13.9999998 6.269531-13.9999998 14v10c0-7.730469 6.2656248-14 13.9999998-14zm0 0" fill="#a1f1fc"/><path d="m437.367188 0h-95.941407c-7.730469 0-14 6.269531-14 14 0 1.765625.339844 3.445312.9375 5 2.011719-5.261719 7.09375-9 13.0625-9h95.941407c7.730468 0 14 6.269531 14 14v-10c0-7.730469-6.269532-14-14-14zm0 0" fill="#a1f1fc"/><path d="m336.246094 230.109375c0-6.125-4.273438-11.238281-10-12.546875l-9.550782-37.386719c3.976563-2.191406 6.671876-6.421875 6.671876-11.285156 0-7.113281-5.765626-12.878906-12.878907-12.878906-5.386719 0-9.996093 3.304687-11.917969 8l-63.261718-6.136719c-1.28125-5.761719-6.414063-10.074219-12.5625-10.074219-6.152344 0-11.289063 4.320313-12.566406 10.085938l-62.238282 6.039062c-1.945312-4.648437-6.53125-7.914062-11.886718-7.914062-7.113282 0-12.878907 5.765625-12.878907 12.878906 0 4.53125 2.34375 8.507813 5.882813 10.804687l-9.601563 37.574219c-6.726562.429688-12.050781 6.003907-12.050781 12.835938 0 7.070312 5.699219 12.804687 12.753906 12.875l9.964844 31.679687c-3.007812 2.359375-4.949219 6.015625-4.949219 10.132813 0 6.878906 5.390625 12.476562 12.175781 12.84375l6.761719 21.492187c-3.261719 2.335938-5.398437 6.152344-5.398437 10.46875 0 7.113282 5.765625 12.878906 12.882812 12.878906 3.484375 0 6.640625-1.386718 8.960938-3.636718l49.507812 26.074218c-.121094.714844-.199218 1.445313-.199218 2.195313 0 7.113281 5.765624 12.878906 12.878906 12.878906 7.113281 0 12.878906-5.765625 12.878906-12.878906 0-.726563-.074219-1.433594-.1875-2.128906l50.679688-26.695313c2.355468 2.570313 5.730468 4.191406 9.492187 4.191406 7.113281 0 12.878906-5.765624 12.878906-12.878906 0-4.875-2.710937-9.121094-6.707031-11.304687l6.488281-20.632813c.074219 0 .144531.011719.214844.011719 7.117187 0 12.882813-5.765625 12.882813-12.878906 0-4.453125-2.257813-8.375-5.691407-10.6875l9.851563-31.316407c6.082031-1.023437 10.71875-6.304687 10.71875-12.679687zm-36.9375 45.65625-62.28125-24.308594 75.304687-14.730469c1.238281 2.0625 3.039063 3.75 5.191407 4.847657l-9.550782 30.367187c-3.386718.132813-6.441406 1.5625-8.664062 3.824219zm11.238281-46.84375-76.5625 14.976563c-1.5625-2.796876-4.140625-4.949219-7.234375-5.960938l.046875-65.039062c3.472656-1.152344 6.289063-3.738282 7.742187-7.058594l63.457032 6.152344c1.261718 5.082031 5.527344 8.96875 10.8125 9.65625l9.375 36.671874c-4.1875 1.84375-7.203125 5.847657-7.636719 10.601563zm-91.761719 96.679687h-54.953125c-1.671875-5.109374-6.441406-8.808593-12.097656-8.871093l-6.648437-21.152344c3.363281-2.195313 5.621093-5.921875 5.816406-10.191406l62.179687-26.707031c1.507813 1.707031 3.449219 3.015624 5.664063 3.738281zm-85.722656-97.070312c-.476562-3.902344-2.695312-7.257812-5.859375-9.277344l9.589844-37.519531c5.742187-.328125 10.46875-4.40625 11.773437-9.832031l62.382813-6.050782c1.472656 3.355469 4.328125 5.957032 7.847656 7.089844l-.042969 64.992188c-3.105468 1.007812-5.683594 3.164062-7.25 5.960937zm-5.277344 12.035156c1.53125-1.101562 2.820313-2.527344 3.746094-4.183594l77.730469 15.226563-60.523438 25.996094c-2.3125-3.429688-6.234375-5.691407-10.6875-5.691407-.136719 0-.265625.019532-.402343.023438zm91.007813 93.035156.011719 21.25c-1.898438.609376-3.597657 1.644532-5 3l-46.035157-24.25zm12.9375 24.292969c-1.378907-1.34375-3.054688-2.375-4.925781-2.996093l-.011719-21.292969h51.058593zm62.117187-41.039062c-4.933594.675781-8.972656 4.132812-10.480468 8.746093h-56.578126l-.039062-63.191406c2.351562-.769531 4.40625-2.1875 5.945312-4.058594l63.058594 24.609376c-.089844.601562-.148437 1.210937-.148437 1.835937 0 4.183594 2.007812 7.894531 5.101562 10.246094zm0 0" fill="#69ebfc"/><path d="m440.695312 498.101562h-429.972656c-.003906.234376-.027344.46875-.027344.703126v13.296874h430.027344v-13.324218c0-.226563-.023437-.449219-.027344-.675782zm0 0" fill="#e0734a"/></svg>
				<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
					<a className="link dim white f6 f5-l dib mr3 mr4-l" href="https://www.clarifai.com/predict" title="Press">API Reference</a>
				</div>
			</nav>
		)
	}
}

export default Navigation;