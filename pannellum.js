// Blueprints
const blueprints = {
    plane: {
        name: 'plane',
        image: 'assets/plane.png',
        blueprintPoints: [
            'apto1V1',
            'apto1V2',
            'apto1V3',
            'apto1V4',
            'apto2V1',
            'apto2V2',
            'apto3V1',
            'apto3V2',
            'apto3V3',
            'apto3V4',
            'apto3V5',
            'apto3V6',
        ]
    }
};

// Images
const imageNames = {
    apto1V1: {
        name: 'Apto 1 vista 1',
        blueprint: blueprints.plane
    },
    apto1V2: {
        name: 'Apto 1 vista 2',
        blueprint: blueprints.plane
    },
    apto1V3: {
        name: 'Apto 1 vista 3',
        blueprint: blueprints.plane
    },
    apto1V4: {
        name: 'Apto 1 vista 4',
        blueprint: blueprints.plane
    },
    apto2V1: {
        name: 'Apto 2 vista 1',
        blueprint: blueprints.plane
    },
    apto2V2: {
        name: 'Apto 2 vista 2',
        blueprint: blueprints.plane
    },
    apto3V1: {
        name: 'Apto 3 vista 1',
        blueprint: blueprints.plane
    },
    apto3V2: {
        name: 'Apto 3 vista 2',
        blueprint: blueprints.plane
    },
    apto3V3: {
        name: 'Apto 3 vista 3',
        blueprint: blueprints.plane
    },
    apto3V4: {
        name: 'Apto 3 vista 4',
        blueprint: blueprints.plane
    },
    apto3V5: {
        name: 'Apto 3 vista 5',
        blueprint: blueprints.plane
    },
    apto3V6: {
        name: 'Apto 3 vista 6',
        blueprint: blueprints.plane
    },
};
let sceneSelected = '';

// Pannellum config
const container = document.getElementById('container');
let viewer = {};

function createViewer() {
    const width = document.body.clientWidth;
    const hfov = width < 600 ? 80 : 120;
    viewer = pannellum.viewer(container, {
        default: {
            firstScene: imageNames.apto1V1.name,
            sceneFadeDuration: 2000
        },
        scenes: {
            [imageNames.apto1V1.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-1-vista-1',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-1-vista-1/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto1V1.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto1V2.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-1-vista-2',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-1-vista-2/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto1V2.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto1V3.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-1-vista-3',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-1-vista-3/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto1V3.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto1V4.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-1-vista-4',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-1-vista-4/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto1V4.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto2V1.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-2-vista-1',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-2-vista-1/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto2V1.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto2V2.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-2-vista-2',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-2-vista-2/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto2V2.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V1.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-1',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-1/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V1.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V2.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-2',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-2/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V2.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V3.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-3',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-3/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V3.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V4.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-4',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-4/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V4.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V5.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-5',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-5/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V5.blueprint,
                gap: 0,
                hotSpots: [
                ]
            },
            [imageNames.apto3V6.name]: {
                hfov,
                yaw: 0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/apto-3-vista-6',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/apto-3-vista-6/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 3,
                    cubeResolution: 1272
                },
                blueprint: imageNames.apto3V6.blueprint,
                gap: 0,
                hotSpots: [
                ]
            }
        },
        showControls: false,
        autoLoad: true,
        backgroundColor: [255, 255, 255],
        hotSpotDebug: false
    });
    sceneSelected = viewer.getScene();
    const img = document.getElementById('images-Cocina');
    img.style.border = '3px solid #c53736';
    viewerEvents();
}

function viewerEvents() {
    viewer.on('load', () => {
        setBlueprintImage();
    });
    viewer.on('animatefinished', (coordinates) => {
        const pause = document.getElementById('pause');
        pause.style.display = 'none';
        const play = document.getElementById('play');
        play.style.display = 'inline-block';
    });
    viewer.on('scenechangefadedone', () => {
        setScene(viewer.getScene());
        autoRotate = true;
        const play = document.getElementById('play');
        play.style.display = 'none';
        const pause = document.getElementById('pause');
        pause.style.display = 'inline-block';

    });
    viewer.on('animateStart', (coordinates) => {
        const path = document.getElementById('svg-guide-path');
        if (path) {
            path.setAttributeNS(null, 'd', generateSvgPath());
        }
    });
    viewer.on('scenechange', (sceneId) => {
        mobileSetHfov();
        changeImgSelected(sceneId);
    });
}

function generateSvgPath() {
    const d2r = Math.PI / 180;
    const fov = viewer.getHfov();
    let pan = viewer.getYaw();
    const config = viewer.getConfig();
    pan = config.gap + pan;
    let arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
    let arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
    let arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
    let arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
    arcX1 += 50;
    arcY1 += 50;
    arcX2 += 50;
    arcY2 += 50;
    return 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 + ' Z';
}



// CONTROLS FUNCTIONS
function moveUp() {
    viewer.setPitch(viewer.getPitch() + 10);
}
function moveDown() {
    viewer.setPitch(viewer.getPitch() - 10);
}
function moveLeft() {
    viewer.setYaw(viewer.getYaw() - 10);
}
function moveRight() {
    viewer.setYaw(viewer.getYaw() + 10);
}

function zoomIn() {
    viewer.setHfov(viewer.getHfov() - 10);
}
function zoomOut() {
    viewer.setHfov(viewer.getHfov() + 10);
}
function fullscreen() {
    viewer.toggleFullscreen();
}

function toggleControls() {
    const controls = document.getElementById('controls');
    const showControls = document.getElementById('show-controls');
    const banners = document.getElementById('banners');
    const actionButtons = document.getElementById('action-buttons');
    const blueprints = document.getElementById('blueprints');
    const miniatures = document.getElementById('miniatures');
    if (controls.style.display === 'none') {
        controls.style.display = 'block';
        showControls.style.display = 'none';
        banners.style.display = 'block';
        actionButtons.style.display = 'flex';
        miniatures.style.display = 'block';
    } else {
        controls.style.display = 'none';
        showControls.style.display = 'block';
        banners.style.display = 'none';
        actionButtons.style.display = 'none';
        blueprints.style.display = 'none';
        miniatures.style.display = 'none';
    }
}
function mobileToggleControls() {
    const actionButtons = document.getElementById('action-buttons');
    const showButton = document.getElementById('show-action-container');
    const blueprints = document.getElementById('blueprints');
    const mobileSelect = document.getElementById('mobile-select-screens');
    const cMobileUImage = document.getElementById('container-mobile-urbanization-image');
    if (actionButtons.style.display === 'none') {
        actionButtons.style.display = 'flex';
        showButton.style.display = 'none';
        mobileSelect.style.display = 'block';
        cMobileUImage.style.display = 'block';
    } else {
        actionButtons.style.display = 'none';
        showButton.style.display = 'block';
        blueprints.style.display = 'none';
        mobileSelect.style.display = 'none';
        cMobileUImage.style.display = 'none';
    }
}

function startAutoRotate() {
    viewer.startAutoRotate(-5, viewer.getPitch());
    const play = document.getElementById('play');
    play.style.display = 'none';
    const pause = document.getElementById('pause');
    pause.style.display = 'inline-block';
}
function stopAutoRotate() {
    viewer.stopAutoRotate();
    const pause = document.getElementById('pause');
    pause.style.display = 'none';
    const play = document.getElementById('play');
    play.style.display = 'inline-block';
}


/**
 * SCENE FUNCTIONS
 */
function toggleScreenList() {
    const screensList = document.getElementById('screens-list');
    screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}
function toggleMobileScreenList() {
    const screensList = document.getElementById('mobile-screens-list');
    screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}

function createScreenList() {
    const screensList = document.getElementById('screens-list');
    const mobileScreensList = document.getElementById('mobile-screens-list');
    const currentScene = viewer.getScene();
    for (const image in imageNames) {
        if (imageNames.hasOwnProperty(image)) {
            const element = imageNames[image];
            let div = document.createElement('div');
            div.setAttributeNS(null, 'id', element.name);
            if (currentScene === element.name) {
                div.setAttributeNS(null, 'class', 'screen-item screen-selected');
            } else {
                div.setAttributeNS(null, 'class', 'screen-item');
            }
            if (screen.width > 600) {
                div.addEventListener('click', () => loadScene(element.name) & toggleScreenList());
                screensList.appendChild(div);
            } else {
                div.addEventListener('click', () => loadScene(element.name) & toggleMobileScreenList());
                mobileScreensList.appendChild(div);
            }
            div.innerHTML += element.name;
        }
    }
    document.getElementById('screens-title').innerHTML = currentScene;
    document.getElementById('mobile-screens-title').innerHTML = currentScene;
}
function loadScene(sceneId) {
    if (sceneId !== viewer.getScene()) {
        viewer.loadScene(sceneId);
        setScene(sceneId);
        changeImgSelected(sceneId);
    }
}
function changeImgSelected(sceneId) {
    const img = document.getElementById('images-' + sceneId);
    const imgs = document.getElementById('images');
    const images = imgs.getElementsByTagName('img');
    for (const i of images) {
        i.style.border = 'none';
    }
    if (img) {
        img.style.border = '3px solid #c53736';
    }
}

function setScene(sceneId) {
    document.getElementById('screens-title').innerHTML = sceneId;
    document.getElementById('mobile-screens-title').innerHTML = sceneId;
    const currentScene = document.getElementById(sceneSelected);
    if (currentScene) {
        currentScene.setAttributeNS(null, 'class', 'screen-item');
    }
    if (document.getElementById(sceneId)) {
        document.getElementById(sceneId).setAttributeNS(null, 'class', 'screen-item screen-selected');
    }
    sceneSelected = viewer.getScene();
}

/**
 * BLUEPRINT FUNCTIONS
 */
function createBlueprintImage() {
    const container = document.getElementById('container');
    let img = document.createElement('img');
    img.style.display = 'none';
    img.setAttributeNS(null, 'id', 'blueprint-image');
    // blueprints.appendChild(img);
    container.appendChild(img);
}
function setBlueprintImage() {
    const config = viewer.getConfig();
    const img = document.getElementById('blueprint-image');
    img.setAttributeNS(null, 'src', config.blueprint.image);
    for (const i in blueprints) {
        if (blueprints.hasOwnProperty(i)) {
            const blueprint = blueprints[i];
            if (blueprint.name !== config.blueprint.name) {
                document.getElementById(blueprint.name).style.display = 'none';
            } else {
                document.getElementById(blueprint.name).style.display = 'block';
            }
        }
    }
    const point = document.getElementsByName(viewer.getScene());
    const svgGuide = document.getElementById('svg-rotate-viewer');
    svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
    svgGuide.style.top = point[0].offsetTop - 45 + 'px';
}
function addBlueprintPoints() {
    const divBlueprints = document.getElementById('blueprints');
    for (const i in blueprints) {
        if (blueprints.hasOwnProperty(i)) {
            const blueprint = blueprints[i];
            let container = document.createElement('div');
            container.setAttributeNS(null, 'id', blueprint.name);
            container.style.display = 'none';
            for (const point of blueprint.blueprintPoints) {
                let divPoint = document.createElement('div');
                divPoint.setAttributeNS(null, 'id', point);
                divPoint.setAttributeNS(null, 'name', imageNames[point].name);
                divPoint.setAttributeNS(null, 'class', 'blueprints-button');
                divPoint.addEventListener('click', () => loadScene(imageNames[point].name));
                let label = document.createElement('label');
                label.setAttributeNS(null, 'class', 'blueprints-label');
                label.innerHTML = imageNames[point].name;
                divPoint.appendChild(label);
                container.appendChild(divPoint);
            }
            divBlueprints.appendChild(container);
        }
    }
}
function toggleBlueprints() {
    const blueprints = document.getElementById('blueprints');
    const img = document.getElementById('blueprint-image');
    if (blueprints.style.display !== 'block') {
        blueprints.style.display = 'block';
        const point = document.getElementsByName(viewer.getScene());
        const svgGuide = document.getElementById('svg-rotate-viewer');
        svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
        svgGuide.style.top = point[0].offsetTop - 45 + 'px';
        svgGuide.style.visibility = 'visible';
        img.style.display = 'block';
    } else {
        blueprints.style.display = 'none';
        img.style.display = 'none';
    }
}

/**
 * ORIENTATION FUNCTIONS
 */
function isOrientationSupported() {
    // alert(viewer.isOrientationSupported())
    if (viewer.isOrientationSupported()) {
        // document.getElementById('screens-title').innerHTML = sceneId;;
        // play.style.display = 'inline-block';
    }
}
function startOrientation() {
    if (!viewer.isOrientationActive()) {
        viewer.startOrientation();
        const orientationActive = document.getElementById('orientation-active');
        orientationActive.style.display = 'none';
        const orientationStop = document.getElementById('orientation-stop');
        orientationStop.style.display = 'inline-block';
    }
}
function stopOrientation() {
    if (viewer.isOrientationActive()) {
        viewer.stopOrientation();
        const orientationActive = document.getElementById('orientation-active');
        orientationActive.style.display = 'inline-block';
        const orientationStop = document.getElementById('orientation-stop');
        orientationStop.style.display = 'none';
    }
}

/**
 * SH FUNCTIONS
 */
function toggleShButtons() {
    const shButtons = document.getElementById('sh-buttons');
    if (shButtons.style.display !== 'block') {
        shButtons.style.display = 'block';
    } else {
        shButtons.style.display = 'none';
    }
    const blueprints = document.getElementById('blueprints');
    blueprints.style.display = 'none';
}
function shFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
}
function shTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + location.href);
}
function openLink(link) {
    window.open(link);
}

// Miniatures Functions
let scrollHandle = 0;
function startScrolling(direction, scrollStep = 5) {
    const parent = $("#images");
    if (scrollHandle === 0) {
        scrollHandle = setInterval(function () {
            var newOffset = parent.scrollTop() + (scrollStep * direction);
            parent.scrollTop(newOffset);
        }, 10);
    }
}
function stopScrolling() {
    clearInterval(scrollHandle);
    scrollHandle = 0;
}

// Bootstrap social tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // document.getElementById('facebook').setAttributeNS(null, 'href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
    // document.getElementById('twitter').setAttributeNS(null, 'href', 'https://twitter.com/intent/tweet?url=' + window.location.href);
});

// Mobile functions
function mobileSetHfov() {
    const width = document.body.clientWidth;
    if (width < 600) {
        viewer.setHfov(80);
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.screens-header') && !event.target.matches('.screens-toggle') && !event.target.matches('#screens-title')) {
        const screensList = document.getElementById('screens-list');
        screensList.style.display = 'none';
        const width = document.body.clientWidth;
        if (width < 600 && !event.target.matches('#mobile-screens-title') && !event.target.matches('#mobile-screens-toggle')) {
            const screensList = document.getElementById('mobile-screens-list');
            screensList.style.display = 'none';
        }
    }
    if (!event.target.matches('#sh-button') && !event.target.matches('#sh-image')) {
        const shButtons = document.getElementById('sh-buttons');
        shButtons.style.display = 'none';
    }
}

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    const span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    if (hotSpotDiv.offsetWidth) {
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    } else {
        span.style.marginLeft = -(span.scrollWidth - 14.8) / 2 + 'px';
    }
    span.style.marginTop = -span.scrollHeight - 18 + 'px';
}


function openImageModal(event, args) {
    const img = document.getElementById('image-modal-img');
    img.src = args;
    $('#image-modal').modal({});
}


createViewer();
createScreenList();
isOrientationSupported();
addBlueprintPoints();
createBlueprintImage();
setBlueprintImage();
mobileSetHfov();


