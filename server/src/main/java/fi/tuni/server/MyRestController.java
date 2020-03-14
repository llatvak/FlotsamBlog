package fi.tuni.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
public class MyRestController {

    @Autowired
    BlogPostRepository postRepository;

    @RequestMapping(value = "/posts", method = RequestMethod.POST)
    public ResponseEntity<Void> saveLocation(@RequestBody BlogPost p, UriComponentsBuilder b) {

        this.postRepository.save(p);

        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<BlogPost> fetchLocation() {
        return postRepository.findAll();
    }
}
