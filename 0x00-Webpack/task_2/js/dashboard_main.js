import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#logo').css({
  'width': '200px',
  'height': '200px',
  'background-image': `url(${logo})`,
  'background-size': '200px 200px',
});

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text('${count} clicks on the button');
}

$('button').on('click', debounce(updateCounter, 500));
