const mediaQuery = window.matchMedia('(min-width: 600px)');

var menuOpen = false;

function openCloseMenu() {
    const openCloseButton = document.getElementById('openCloseButton');
    const nav = document.getElementsByTagName('nav')[0];

    if (menuOpen) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }

    menuOpen = !menuOpen;
}

function onSectionButtonClick() {
    if (!mediaQuery.matches) {
        openCloseMenu()
    }
}

function activateCorrectSideBarButton() {
    const itemPanels = document.getElementsByClassName("content-outer");
    const closestPanel = getClosestItemPanel(itemPanels);
    setButtonActivations(closestPanel.id);
}

function getClosestItemPanel(itemPanels) {
    let closestPanel;
    let lowest = Number.POSITIVE_INFINITY;

    for (var itemPanel of itemPanels) {
        const panelDistance = getItemPanelDistance(itemPanel);

        if (panelDistance < lowest) {
            closestPanel = itemPanel;
            lowest = panelDistance;
        }
    }

    return closestPanel;
}

function getItemPanelDistance(itemPanel) {
    const boundingRect = itemPanel.getBoundingClientRect();
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
