<?php
namespace Src\Controller;

use Src\Model\Event;

class EventController {

    private $db;
    private $requestMethod;
    private $eventId;

    private $event;

    public function __construct($db, $requestMethod, $eventId)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->eventId = $eventId;
        $this->event = new Event($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->eventId) {
                    $response = $this->getEvent($this->eventId);
                } else {
                    $response = $this->getAllEvents();
                };
                break;
            case 'POST':
                $response = $this->createEvent();
                break;
            case 'PUT':
                $response = $this->updateEvent($this->eventId);
                break;
            case 'DELETE':
                $response = $this->deleteEvent($this->eventId);
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function getAllEvents()
    {
        $result = $this->event->findAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getEvent($id)
    {
        $result = $this->event->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function createEvent()
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        if (! $this->validateEventData($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->event->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = '{}';
        return $response;
    }

    private function updateEvent($id)
    {
        $result = $this->event->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        if (! $this->validateEventData($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->event->update($id, $input);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = '{}';
        return $response;
    }

    private function deleteEvent($id)
    {
        $result = $this->event->find($id);
        if (! $result) {
            return $this->notFoundResponse();
        }
        $this->event->delete($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = '{}';
        return $response;
    }

    private function validateEventData($input)
    {
        if (! isset($input['name'])) {
            return false;
        }
        if (! isset($input['startdt'])) {
            return false;
        }
        if (! isset($input['enddt'])) {
            return false;
        }
        if (! isset($input['category'])) {
            return false;
        }
        return true;
    }

    private function unprocessableEntityResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input'
        ]);
        return $response;
    }

    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
}