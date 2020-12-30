function scrollToItem(sideBarButton, contentPanelId) {
	//var panelId = sideBarButton.dataset['panelId'];
	var element = document.getElementById(contentPanelId);
	element.scrollIntoView({behavior: "smooth"});
}

function activateCorrectSideBarButton() {
	var itemPanels = document.getElementsByClassName("item-panel");
	var closestPanel = getClosestItemPanel(itemPanels);
	setButtonActivations(closestPanel.id);
}

function getClosestItemPanel(itemPanels) {
	var closestPanel;
	var lowest = Number.POSITIVE_INFINITY;

	for (var itemPanel of itemPanels) {
		var panelDistance = getItemPanelDistance(itemPanel);

		if (panelDistance < lowest) {
			closestPanel = itemPanel;
			lowest = panelDistance;
		}
	}

	return closestPanel;
}

function getItemPanelDistance(itemPanel) {
	var boundingRect = itemPanel.getBoundingClientRect();

	return Math.abs(boundingRect.y);
}

function setButtonActivations(itemId) {
	var sideBarButtons = getAllSideBarButtons();

	for (var sideBarButton of sideBarButtons) {
		if (isMatchingSideBarButton(sideBarButton, itemId)) {
			sideBarButton.classList.add('active');
		} else {
			sideBarButton.classList.remove('active');
		}
	}
}

function getAllSideBarButtons() {
	var navigationList = document.getElementById('navigation_list');

	return navigation_list.getElementsByTagName('a');
}

function isMatchingSideBarButton(sideBarButton, itemId) {
	return sideBarButton.dataset['panelId'] === itemId;
}