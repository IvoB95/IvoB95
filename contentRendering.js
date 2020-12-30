function renderContent() {
	renderLeftPanel();
	renderContentPanels();
	activateCorrectSideBarButton();
}

function renderContentPanels() {
	var contentPanelContainer = getContentPanelContainer();

	for (var idx in content) {
		var contentPanel = renderContentPanel(content[idx], idx);
		contentPanelContainer.appendChild(contentPanel);
	}
}

function getContentPanelContainer() {
	return document.getElementById('item-panel-containter');
}

function renderContentPanel(contentItem, contentItemNr) {
	var contentPanelId = getContentPanelId(contentItemNr);

	var panelDiv = document.createElement("div");
	panelDiv.setAttribute("class", "item-panel");
	panelDiv.setAttribute("id", contentPanelId);

	var contentDiv = renderContentItem(contentItem);;


	panelDiv.appendChild(contentDiv);

	return panelDiv;
}

function renderContentItem(contentItem) {
	var contentDiv = document.createElement('div');
	contentDiv.setAttribute("class", "item-panel-content");

	var header = document.createElement("h1");
	var headerText = document.createTextNode(contentItem.name);
	header.appendChild(headerText);
	contentDiv.appendChild(header);

	var line = document.createElement("hr");
	line.setAttribute("class", "sect");
	contentDiv.appendChild(line);

	switch (contentItem.type) {
		case LISTS:
			renderSubSections(contentItem, contentDiv); 
			break;
		case SKILLS:
			renderSkills(contentItem, contentDiv);
			break;
	}

	return contentDiv;
}

function renderSubSections(contentItem, contentDiv) {
	for (var subSection of contentItem.subSections) {
		var subSectionDiv = createContentSubSection(subSection);
		contentDiv.appendChild(subSectionDiv);

		var dashedLine = document.createElement("hr");
		dashedLine.setAttribute("class", "subsect");
		contentDiv.appendChild(dashedLine);
	}
}

function getContentPanelId(contentItemNr) {
	return `content-panel-${contentItemNr}`; 
}

function createPanelDiv() {
	var div = document.createElement("div");
	div.setAttribute("class", "item-panel-content");

	return div;
}

function createContentSubSection(contentSubSection) {
	var div = document.createElement("div");

	var header = document.createElement("h2");
	var headerText = document.createTextNode(contentSubSection.name);
	header.appendChild(headerText);
	div.appendChild(header);

	if (contentSubSection.text) {
		var paragraph = document.createElement("p");
		var paragraphText = document.createTextNode(contentSubSection.text);
		paragraph.appendChild(paragraphText);
		div.appendChild(paragraph);
	}

	return div;
}

function renderSkills(contentItem, contentDiv) {
	for (var skillItem of contentItem.items) {
		var skillDiv = renderSkill(skillItem);
		contentDiv.appendChild(skillDiv);

		var dashedLine = document.createElement("hr");
		dashedLine.setAttribute("class", "subsect");
		contentDiv.appendChild(dashedLine);
	}	
}

function renderSkill(skillItem) {
	var div = document.createElement("div");
	div.setAttribute("class", "skillContainer");

	var nameSpan = document.createElement("span");
	nameSpanText = document.createTextNode(skillItem.name);
	nameSpan.appendChild(nameSpanText);
	div.appendChild(nameSpan);

	var skilldiv = document.createElement("div");
	skilldiv.setAttribute("class", "skillLevelContainer");
	div.appendChild(skilldiv);

	for (var i = 1; i <= MAX_SKILL; i++) {
		var circleSpan = renderSkillCircle(i <= skillItem.level);
		skilldiv.appendChild(circleSpan);
	}

	return div;
}

function renderSkillCircle(darken) {
	var circleSpan = document.createElement("span");
	circleSpan.setAttribute("class", "dot" + (darken ? " dark" : ""));

	return circleSpan;
}

function renderLeftPanel() {
	var leftPanelNavigation = getLeftPanelNavigation();

	for (var idx in content) {
		var button = getLeftPanelButton(content[idx], idx);
		leftPanelNavigation.appendChild(button);
	}
}

function getLeftPanelButton(contentItem, contentItemNr) {
	var contentPanelId = getContentPanelId(contentItemNr); 

	var listItem = document.createElement("li");

	var link = document.createElement("a");
	link.setAttribute("data-panel-id", contentPanelId);
	link.onclick = () => scrollToItem(this, contentPanelId);
	var buttonText = document.createTextNode(contentItem.name);
	link.appendChild(buttonText);
	listItem.appendChild(link);

	return listItem;
}

function getLeftPanelNavigation() {
	return document.getElementById('navigation_list');
}