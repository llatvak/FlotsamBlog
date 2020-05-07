package fi.tuni.server.controller;

import fi.tuni.server.category.Category;
import fi.tuni.server.category.CategoryRepository;
import fi.tuni.server.exception.CannotFindCategoryException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class CategoryRestController {

    @Autowired
    CategoryRepository categoryRepository;

    @RequestMapping(value = "api/categories", method = RequestMethod.POST)
    public ResponseEntity<Category> saveCategory(@RequestBody(required = true) @Valid Category p, UriComponentsBuilder b, BindingResult result) {

        if(result.hasErrors()) {
            return new ResponseEntity<Category>(HttpStatus.BAD_REQUEST);
        }
        this.categoryRepository.save(p);
        UriComponents uriComponents = b.path("api/categories/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Category>(p, headers, HttpStatus.CREATED);
    }

    @PutMapping("api/categories/{categoryId}")
    public ResponseEntity<Category> updateCategory(@PathVariable(value = "categoryId") int categoryId, @Valid @RequestBody Category categoryDetails) throws Exception {
        Category category = categoryRepository.findById(categoryId).orElse(categoryRepository.save(categoryDetails));
        category.setTitle(categoryDetails.getTitle());
        final Category updatedCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updatedCategory);
    }

    @RequestMapping(value = "api/categories", method = RequestMethod.GET)
    public Iterable<Category> fetchCategories() {
        return categoryRepository.findAll();
    }

    @RequestMapping(value = "api/categories/{categoryId}", method = RequestMethod.GET)
    public Optional<Category> fetchCategories(@PathVariable int categoryId) {
        if(categoryRepository.findById(categoryId).isPresent()) {
            return categoryRepository.findById(categoryId);
        } else {
            throw new CannotFindCategoryException(categoryId);
        }
    }

    @RequestMapping(value = "api/categories/{categoryId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteCategory(@PathVariable int categoryId) {
        if(categoryRepository.findById(categoryId).isPresent()) {
            categoryRepository.deleteById(categoryId);
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        } else {
            throw new CannotFindCategoryException(categoryId);
        }
    }
}
