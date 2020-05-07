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

/**
 * Rest controller for categories, allows get, post, put and delete requests.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
@RestController
public class CategoryRestController {

    @Autowired
    CategoryRepository categoryRepository;

    /**
     * Saves new category from POST request.
     *
     * @param p received category to be added
     * @param b url builder to expand url to correct value
     * @param result result for checking validation errors
     * @return returns ResponseEntity with appropriate status, and meta info if required
     */
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

    /**
     * Updates category from PUT request if category doesn't exist create one.
     *
     * @param categoryId category id to be updated
     * @param categoryDetails current category data to update or create from
     * @param result result to check validation errors
     * @param b url builder to expand url to correct value
     * @return returns ResponseEntity with appropriate status, and meta info if required
     */
    @PutMapping("api/categories/{categoryId}")
    public ResponseEntity<Category> updateCategory(@PathVariable(value = "categoryId") int categoryId, @Valid @RequestBody Category categoryDetails, BindingResult result, UriComponentsBuilder b) throws Exception {
        if(result.hasErrors()) {
            return new ResponseEntity<Category>(HttpStatus.BAD_REQUEST);
        }
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(category.isPresent()) {
            Category existingCategory = category.get();
            existingCategory.setTitle(categoryDetails.getTitle());
            final Category updatedCategory = categoryRepository.save(existingCategory);
            return ResponseEntity.ok(updatedCategory);
        } else {
            categoryRepository.save(categoryDetails);
            UriComponents uriComponents = b.path("api/categories/{id}").buildAndExpand(categoryDetails.getId());
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(uriComponents.toUri());
            return new ResponseEntity<Category>(categoryDetails, headers, HttpStatus.CREATED);
        }
    }

    /**
     * Gets all categories from GET request.
     *
     * @return returns all categories from repository
     */
    @RequestMapping(value = "api/categories", method = RequestMethod.GET)
    public Iterable<Category> fetchCategories() {
        return categoryRepository.findAll();
    }

    /**
     * Gets one category from GET request by id.
     *
     * @param categoryId category id to get
     * @return returns category if found
     */
    @RequestMapping(value = "api/categories/{categoryId}", method = RequestMethod.GET)
    public Optional<Category> fetchCategories(@PathVariable int categoryId) {
        if(categoryRepository.findById(categoryId).isPresent()) {
            return categoryRepository.findById(categoryId);
        } else {
            throw new CannotFindCategoryException(categoryId);
        }
    }

    /**
     * Delete one category from id received.
     *
     * @param categoryId category id to be deleted
     * @return returns appropriate status if category found
     */
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
